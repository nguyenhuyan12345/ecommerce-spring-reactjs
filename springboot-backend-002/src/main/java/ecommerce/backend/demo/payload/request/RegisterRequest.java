package ecommerce.backend.demo.payload.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private Long id;

    private String fullName;

    private String email;

    private String phoneNumber;

    private String address;

    private String password;

    private String rePassword;

    private String role;

    private String avatar;

}
