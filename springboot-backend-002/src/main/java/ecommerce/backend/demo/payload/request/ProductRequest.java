package ecommerce.backend.demo.payload.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductRequest {
    private Long id;
    private String title;
    private String category;
    private Long price;
    private Long discount;
    private String description;
    private String mainImage;
    private String multiImage;

    // file
    MultipartFile fileMainImage;
    MultipartFile[] multiFileImage;
}
