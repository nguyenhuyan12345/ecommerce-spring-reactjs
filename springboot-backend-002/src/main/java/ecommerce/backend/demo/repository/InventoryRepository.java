package ecommerce.backend.demo.repository;

import ecommerce.backend.demo.entities.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InventoryRepository extends JpaRepository<Inventory, Long> {
}
