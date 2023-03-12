package ecommerce.backend.demo.payload.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class InventoryDto {
    @JsonProperty("size")
    private String size;
    @JsonProperty("number")
    private Long number;
}
