package ecommerce.backend.demo.payload.responce;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DetailProductResponse {
    private Long id;
    private Long price;
    private Long discount;
    private String description;
    private Long sumOrder;
    private List<ProductColorResponse> colorImages;
    private List<String> gallery;
    private Long inventory;

    public DetailProductResponse(Long id, Long price, Long discount, String description, Long sumOrder) {
        this.id = id;
        this.price = price;
        this.discount = discount;
        this.description = description;
        this.sumOrder = sumOrder;
    }
}
