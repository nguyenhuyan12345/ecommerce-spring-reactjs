package ecommerce.backend.demo.SecurityConfigure;

import ecommerce.backend.demo.SecurityConfigure.jwt.JwtAuthenticationFilter;
import ecommerce.backend.demo.sevice.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@EnableWebSecurity
public class WebSecurityConfigure {

    @Autowired
    UserService userService;

    @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter() {
        return new JwtAuthenticationFilter();
    }

    // Khai báo một bean xác định phương pháp mã hóa mật khẩu
    @Bean
    public BCryptPasswordEncoder encode() {
        return new BCryptPasswordEncoder();
    }

    // Khai báo một Bean AuthenticationManager
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    // Khai báo một Bean authenticationProvider
    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();

        authProvider.setUserDetailsService(userService);
        authProvider.setPasswordEncoder(encode());
        return authProvider;
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("http://localhost:5050");
            }
        };
    }

    @Bean
    protected SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {


        http
                .cors()
                .and()
                .csrf().disable()
                .authorizeRequests()
                // Cấu hình authentication anh authorization filter chain
                .antMatchers("/api/user/detail").authenticated()
//                .antMatchers("/api/cart/**", "/api/test/adminrole").hasAnyAuthority("ROLE_ADMIN")
//                .antMatchers("/api/test/userrole").hasAnyAuthority("ROLE_USER")
                .anyRequest().permitAll()
                .and()
                .logout()
                .logoutUrl("/api/logout")
                .permitAll();

/*        http
                .cors()
                .and()
                .csrf().disable()
                .authorizeRequests((requests) -> requests
                        .antMatchers("/api/user/detail").authenticated()
                        .antMatchers("/api/cart/**", "/api/test/adminrole").hasAnyAuthority("ROLE_ADMIN")
                        .antMatchers("/api/test/userrole").hasAnyAuthority("ROLE_USER")
                        .anyRequest().permitAll()
                )
                .logout((logout) -> logout
                        .logoutUrl("/logout")
                        .permitAll()
                );*/



        http.addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
