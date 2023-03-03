package ecommerce.backend.demo.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    @Id
    @Column(name = "id")
    private int id;
    @Basic
    @Column(name = "fullname")
    private String fullName;
    @Basic
    @Column(name = "email")
    private String email;
    @Basic
    @Column(name = "phone_number")
    private String phoneNumber;
    @Basic
    @Column(name = "address")
    private String address;
    @Basic
    @Column(name = "note")
    private String note;
    @Basic
    @Column(name = "order_date")
    private Timestamp orderDate;
    @Basic
    @Column(name = "status")
    private Integer status;
}
