package ecommerce.backend.demo.payload.request;

import com.fasterxml.jackson.annotation.JsonProperty;
import ecommerce.backend.demo.payload.dto.ProductColorDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductRequestMapper {
    private Long id;

    private String title;

    private String category;

    private Long price;

    private Long discount;

    private String description;

    private String brand;

    private String mainImage;

    private String multiImage;

    ArrayList<ProductColorDto> productColorDtoList;
}
