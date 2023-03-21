package ecommerce.backend.demo.payload.responce;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegisterConfirmResponse {
    private Boolean status;
    private String message;

    public RegisterConfirmResponse(Boolean status) {
        this.status = status;
    }
}
