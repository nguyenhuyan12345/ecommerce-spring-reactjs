package ecommerce.backend.demo.payload.request;

import ecommerce.backend.demo.payload.dto.InventoryDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

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

    private String multiImage;

    @NotBlank
    private String brand;

    @NotNull
    private String[] colorName;

    @NotNull
    private String[] inventory;

    private InventoryDto inventoryDtoByColorOrSize;

    // file
    @NotNull
    private MultipartFile fileMainImage;

    @NotNull
    private MultipartFile[] multiFileImage;

    @NotNull
    private MultipartFile[] colorList;


}
