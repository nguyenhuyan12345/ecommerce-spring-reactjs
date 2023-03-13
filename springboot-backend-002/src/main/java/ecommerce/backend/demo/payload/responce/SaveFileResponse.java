package ecommerce.backend.demo.payload.responce;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SaveFileResponse {
    String fileName;
    Boolean status;
    String message;

    public SaveFileResponse(Boolean status, String message) {
        this.status = status;
        this.message = message;
    }
}
