package ecommerce.backend.demo.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Sold {
    @Id
    @Column(name = "id")
    private Long id;
    @Basic
    @Column(name = "total_sold")
    private Long totalSold;
    @Basic
    @Column(name = "returns")
    private Long returns;
    @Basic
    @Column(name = "buyer_id")
    private Long buyerId;
    @Basic
    @Column(name = "product_id")
    private Long productId;
}
