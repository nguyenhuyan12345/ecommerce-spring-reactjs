package ecommerce.backend.demo.repository;

import ecommerce.backend.demo.entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
