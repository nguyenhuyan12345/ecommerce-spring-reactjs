package ecommerce.backend.demo.repository;

import ecommerce.backend.demo.entities.ProductColor;
import ecommerce.backend.demo.payload.responce.ProductColorResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductColorRepository extends JpaRepository<ProductColor, Long> {
    @Query(value = "select new ecommerce.backend.demo.payload.responce.ProductColorResponse(pc.productColor, pc.image) from ProductColor pc where pc.productId = ?1")
    List<ProductColorResponse> findAllImageById(Long id);

    @Query(value = "select pc from ProductColor pc where pc.productId = ?1")
    List<ProductColor> findAllByIdTest(Long id);

}
