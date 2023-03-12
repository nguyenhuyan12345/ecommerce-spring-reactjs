package ecommerce.backend.demo.payload.responce;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductColorResponse {
    private String coloName;
    private String colorImage;
}
