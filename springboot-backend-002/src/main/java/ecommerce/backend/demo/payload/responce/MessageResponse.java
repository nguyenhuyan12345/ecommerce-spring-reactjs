package ecommerce.backend.demo.payload.responce;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.validation.BindingResult;

// Lớp đại diện cho message responce
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MessageResponse {
    private String message;
//    private BindingResult bindingResult;
}
