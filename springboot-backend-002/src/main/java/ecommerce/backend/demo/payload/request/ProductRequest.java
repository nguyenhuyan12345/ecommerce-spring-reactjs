package ecommerce.backend.demo.payload.request;

import ecommerce.backend.demo.payload.dto.InventoryDto;
import ecommerce.backend.demo.payload.dto.ProductColorDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductRequest {
    private Long id;
    @NotBlank
    private String title;
    @NotBlank
    private String category;
    @NotNull
    private Long price;

    private Long discount;
    @NotBlank
    private String description;

    private String mainImage;

    @NotBlank
    private String brand;

    @NotBlank
    private List<String> multiImage;


    private List<ProductColorDto> productColorLists;




}
