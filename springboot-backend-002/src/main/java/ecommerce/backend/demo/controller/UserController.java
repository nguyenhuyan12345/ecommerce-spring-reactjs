package ecommerce.backend.demo.controller;


import ecommerce.backend.demo.SecurityConfigure.jwt.JwtTokenProvider;
import ecommerce.backend.demo.entities.CustomUserDetail;
import ecommerce.backend.demo.entities.User;
import ecommerce.backend.demo.payload.request.LoginRequest;
import ecommerce.backend.demo.payload.request.ProductRequest;
import ecommerce.backend.demo.payload.request.RegisterRequest;
import ecommerce.backend.demo.payload.responce.LoginResponse;
import ecommerce.backend.demo.payload.responce.MessageResponse;
import ecommerce.backend.demo.payload.responce.RegisterConfirmResponse;
import ecommerce.backend.demo.payload.responce.UserDetailResponse;
import ecommerce.backend.demo.sevice.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.swing.*;
import javax.validation.Valid;
import java.util.List;
import java.util.Objects;

@RestController
//@CrossOrigin(origins = "http://localhost:5050")
public class UserController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserService userService;

    @Autowired
    BCryptPasswordEncoder encoder;

    @Autowired
    JwtTokenProvider tokenProvider;

    @GetMapping(value = {"/", "/home"})
    public String getHome() {
        return "Lấy dữ liệu trang chủ";
    }

    @PostMapping("/login")
    public LoginResponse authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        // Xác thực thông tin người dùng Request lên
        Object object = loginRequest;
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );

        // Nếu không xảy ra exception tức là thông tin hợp lệ
        // Set thông tin authentication vào Security Context
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Trả về jwt cho người dùng.
        String jwt = tokenProvider.generateToken((CustomUserDetail) authentication.getPrincipal());
        authentication.getPrincipal();
        String fullName = ((CustomUserDetail) authentication.getPrincipal()).getUser().getFullName();
        String avatar = ((CustomUserDetail) authentication.getPrincipal()).getUser().getAvatar();
        String role = ((CustomUserDetail) authentication.getPrincipal()).getUser().getRole();
//        System.out.println(jwt);
        return new LoginResponse(jwt, fullName, avatar, role);
    }

    @GetMapping("/user/detail")
    public UserDetailResponse getUserDetail(@RequestHeader(value = "Authorization", required = false) String authorization) {
        String jwt = authorization.substring(7);
        Long userId = tokenProvider.getUserIdFromJWT(jwt);
        User user = new User();
        if (userId != null) {
            user = userService.getById(userId);
        }

        UserDetailResponse userDetailResponse = new UserDetailResponse();
        BeanUtils.copyProperties(user, userDetailResponse);
        return userDetailResponse;
    }

    @PostMapping(value = "/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest) {
        registerRequest.setPassword(encoder.encode(registerRequest.getPassword()));
        return userService.register(registerRequest);
    }

    @GetMapping(value = "/registrationConfirm")
    public RegisterConfirmResponse registrationConfirm( @RequestParam String token) {
        return userService.registrationConfirm(token);
    }
}
