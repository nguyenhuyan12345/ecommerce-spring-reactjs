package ecommerce.backend.demo.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Inventory {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Basic
    @Column(name = "product_id")
    private Long productID;
    @Basic
    @Column(name = "product_color_id")
    private Integer productColorId;
    @Basic
    @Column(name = "num")
    private Long num;
    @Basic
    @Column(name = "size")
    private String size;
}
