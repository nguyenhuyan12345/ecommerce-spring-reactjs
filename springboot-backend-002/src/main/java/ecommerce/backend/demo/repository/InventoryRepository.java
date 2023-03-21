package ecommerce.backend.demo.repository;

import ecommerce.backend.demo.entities.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface InventoryRepository extends JpaRepository<Inventory, Long> {

    @Query(value = "select sum(i.num) from Inventory i where i.productID = ?1 group by i.productID")
    public Long getSumInventoryByProductId(Long id);
}
