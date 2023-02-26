package ecommerce.backend.demo.config;

import ecommerce.backend.demo.ultils.FileUtils;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MvcConfig implements WebMvcConfigurer {
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
                .addResourceHandler("/api/images/**") // vói đường đãn url bắt đầu bằng images/
                .addResourceLocations("file:/" + FileUtils.FOLDE_MEDIA); // thì nó sẽ vào thư mục FOLDER_MEDIA lấy file
    }
}
