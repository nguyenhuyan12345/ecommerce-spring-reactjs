package ecommerce.backend.demo.controller;


import ecommerce.backend.demo.SecurityConfigure.jwt.JwtTokenProvider;
import ecommerce.backend.demo.entities.CustomUserDetail;
import ecommerce.backend.demo.entities.User;
import ecommerce.backend.demo.payload.request.LoginRequest;
import ecommerce.backend.demo.payload.request.ProductRequest;
import ecommerce.backend.demo.payload.request.RegisterRequest;
import ecommerce.backend.demo.payload.responce.LoginResponse;
import ecommerce.backend.demo.payload.responce.MessageResponse;
import ecommerce.backend.demo.sevice.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.swing.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5050")
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
        System.out.println(jwt);
        return new LoginResponse(jwt);
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestPart(value = "id", required = false) String id,
                                          @RequestPart(value = "fullName", required = false) String fullName,
                                          @RequestPart(value = "email", required = false) String email,
                                          @RequestPart(value = "password", required = false) String password,
                                          @RequestPart(value = "rePassword", required = false) String rePassword,
                                          @RequestPart(value = "address", required = false) String address,
                                          @RequestPart(value = "phoneNumber", required = false) String phoneNumber,
                                          @RequestPart(value = "role", required = false) String role,
                                          @RequestPart(value = "avatarImage", required = false) MultipartFile avatarImage) {
//            RegisterRequest registerRequest = new RegisterRequest(Long.parseLong(id), fullName, email, password, rePassword, address, phoneNumber, role, avatarImage);

        RegisterRequest registerRequest = new RegisterRequest();

        if (id != null) {
            registerRequest.setId(Long.parseLong(id));
        }
        if (fullName != null) {
            registerRequest.setFullName(fullName);
        }
        if (email != null) {
            registerRequest.setEmail(email);
        }
        if (password != null) {
            registerRequest.setPassword(password);
        }
        if (rePassword != null) {
            registerRequest.setRePassword(rePassword);
        }
        if (address != null) {
            registerRequest.setEmail(address);
        }
        if (phoneNumber != null) {
            registerRequest.setPhoneNumber(phoneNumber);
        }
        if (role != null) {
            registerRequest.setRole(role);
        }
        if (avatarImage != null) {
            registerRequest.setAvatarImage(avatarImage);
        }

        RegisterRequest registerRequestEncodePassword = registerRequest;
        registerRequestEncodePassword.setPassword(encoder.encode(registerRequest.getPassword()));

        // Kiểm tra xem mail đã tồn tại chưa nếu tồn tại trả lại responce
        if (userService.checkUserName(registerRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        // Create new User
        String message = userService.saveUser(registerRequestEncodePassword);
        System.out.println(message);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

}
