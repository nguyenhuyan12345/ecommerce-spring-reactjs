package ecommerce.backend.demo.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "product_color", schema = "sale_site_1", catalog = "")
public class ProductColor {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Basic
    @Column(name = "product_id")
    private Long productId;
    @Basic
    @Column(name = "product_color")
    private String productColor;
    @Basic
    @Column(name = "image")
    private String image;
}
