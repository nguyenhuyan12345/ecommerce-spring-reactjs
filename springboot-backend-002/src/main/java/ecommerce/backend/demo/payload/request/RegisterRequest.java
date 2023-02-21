package ecommerce.backend.demo.payload.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;

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
    //   @NotBlank
    private String password;
    //    @NotBlank
    private String rePassword;
    //    @NotBlank
    private String role;
    //    @NotBlank
    private MultipartFile avatarImage;

    private String avatar;


    public RegisterRequest(Long id, String fullName, String email, String phoneNumber, String address, String password, String rePassword, String role, MultipartFile avatarImage) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.password = password;
        this.rePassword = rePassword;
        this.role = role;
        this.avatarImage = avatarImage;
    }


}
