package ecommerce.backend.demo.payload.request;

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
    @NotBlank
    private String mainImage;
    @NotBlank
    private String multiImage;
    @NotBlank
    private String brand;

    // file
    @NotNull
    MultipartFile fileMainImage;
    @NotNull
    MultipartFile[] multiFileImage;
}
