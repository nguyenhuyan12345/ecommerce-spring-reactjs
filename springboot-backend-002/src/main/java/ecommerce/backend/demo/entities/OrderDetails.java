package ecommerce.backend.demo.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "order_details", schema = "sale_site_1", catalog = "")
public class OrderDetails {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Basic
    @Column(name = "order_id")
    private Long orderId;
    @Basic
    @Column(name = "product_id")
    private Long productId;
    @Basic
    @Column(name = "price")
    private Long price;
    @Basic
    @Column(name = "num")
    private Long num;

    private Long sumNum;
}
