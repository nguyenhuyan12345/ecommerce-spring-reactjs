package ecommerce.backend.demo.payload.responce;

import lombok.Data;

@Data
public class LoginResponse {
    private String accessToken;
    private String tokenType = "Bearer";
    private String fullName;
    private String avatar;
    private String role;

    public LoginResponse(String accessToken, String fullName, String avatar, String role) {
        this.accessToken = accessToken;
        this.fullName = fullName;
        this.avatar = avatar;
        this.role = role;
    }
}
