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
    private int id;
    @Basic
    @Column(name = "order_id")
    private Integer orderId;
    @Basic
    @Column(name = "price")
    private Integer price;
    @Basic
    @Column(name = "num")
    private Integer num;
}
