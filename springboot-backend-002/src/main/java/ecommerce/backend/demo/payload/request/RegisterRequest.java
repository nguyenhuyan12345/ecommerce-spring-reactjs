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
//    @NotBlank
    private String fullName;
//    @NotBlank
    private String email;
//    @NotBlank
    private String phoneNumber;
//    @NotBlank
    private String address;
//    @NotBlank
    private String password;
//    @NotBlank
    private String rePassword;
//    @NotBlank
    private String role;
//    @NotNull
    private MultipartFile avatarImage;

    private String avatar;


}
