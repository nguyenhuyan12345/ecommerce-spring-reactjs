package ecommerce.backend.demo.repository;

import ecommerce.backend.demo.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.sql.Timestamp;

public interface ProductRepository extends JpaRepository<Product, Long> {
    Product findProductByTitle(String title);
}
