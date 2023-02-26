package ecommerce.backend.demo.payload.responce;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.validation.BindingResult;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductSaveResponse {
    private String message;
    private Boolean state;
//    private BindingResult bindingResult;
}
