package ecommerce.backend.demo.repository;

import ecommerce.backend.demo.entities.Sold;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SoldRepository extends JpaRepository<Sold, Long> {
}
