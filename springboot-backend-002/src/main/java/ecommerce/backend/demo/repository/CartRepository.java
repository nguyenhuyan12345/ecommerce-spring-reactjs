package ecommerce.backend.demo.repository;

import ecommerce.backend.demo.entities.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart, Long> {
    List<Cart> findAllByUserId(Integer userId);
}
