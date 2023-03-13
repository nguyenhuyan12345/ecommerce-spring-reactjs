package ecommerce.backend.demo.payload.responce;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SaveMultiFileResponse {
    List<String> fileNames;
    Boolean status;
    String message;

    public SaveMultiFileResponse(Boolean status, String message) {
        this.status = status;
        this.message = message;
    }
}
