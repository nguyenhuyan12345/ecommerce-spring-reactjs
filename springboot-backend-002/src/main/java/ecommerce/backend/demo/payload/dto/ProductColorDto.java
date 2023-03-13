package ecommerce.backend.demo.payload.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductColorDto {
    String file;

    private String colorName;

    ArrayList<InventoryDto> inventory;


}