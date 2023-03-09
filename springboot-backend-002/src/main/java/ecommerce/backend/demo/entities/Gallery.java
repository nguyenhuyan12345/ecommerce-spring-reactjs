package ecommerce.backend.demo.entities;

import lombok.*;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Gallery {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Basic
    @Column(name = "product_id")
    private Long productId;
    @Basic
    @Column(name = "thumbnail")
    private String thumbnail;
}
