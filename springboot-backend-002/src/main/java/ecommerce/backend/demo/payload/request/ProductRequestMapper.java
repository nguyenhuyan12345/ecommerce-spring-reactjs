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
    @JsonProperty("title")
    private String title;
    @JsonProperty("category")
    private String category;
    @JsonProperty("price")
    private Long price;
    @JsonProperty("discount")
    private Long discount;
    @JsonProperty("description")
    private String description;
    @JsonProperty("brand")
    private String brand;
    @JsonProperty("newProductColorList")
    ArrayList<ProductColorDto> productColorDtoList;

    private String mainImage;

    private String multiImage;

    private MultipartFile fileMainImage;

    private MultipartFile[] multiFileImage;
}
