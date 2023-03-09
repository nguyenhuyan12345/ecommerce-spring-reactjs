package ecommerce.backend.demo.payload.dto;

import ecommerce.backend.demo.entities.OrderDetails;
import ecommerce.backend.demo.entities.Product;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetailSum {
    Product product;
//    Long productid;
    Long sumNum;
}
