package ecommerce.backend.demo.repository;

import ecommerce.backend.demo.entities.Product;
import ecommerce.backend.demo.payload.responce.DetailProductResponse;
import ecommerce.backend.demo.payload.responce.ProductResponse;
import org.hibernate.annotations.NamedQueries;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    Product findProductByTitle(String title);

    @Query(value = "select new ecommerce.backend.demo.payload.responce.ProductResponse(p.id, p.price, p.discount, p.description, sum(od.num)) from Product p left join OrderDetails od on p.id = od.productId group by  p.id order by p.createAt desc")
    Page<ProductResponse> findTopNew(Pageable pageable);


    @Query(value = "select new ecommerce.backend.demo.payload.responce.ProductResponse(p.id, p.price, p.discount, p.description, sum(od.num) as sumNum) from Product p left join OrderDetails od on p.id = od.productId group by  p.id order by sumNum desc")
    Page<ProductResponse> findTopOrderProducts(Pageable pageable);

    @Query(value = "select new ecommerce.backend.demo.payload.responce.ProductResponse(p.id, p.price, p.discount, p.description, sum(od.num) as sumNum) from Product p left join OrderDetails od on p.id = od.productId where p.category like 'Áo khoác%' group by  p.id order by sumNum desc")
    Page<ProductResponse> findTopCoatProducts(Pageable pageable);

    @Query(value = "select new ecommerce.backend.demo.payload.responce.ProductResponse(p.id, p.price, p.discount, p.description, sum(od.num)) from Product p left join OrderDetails od on p.id = od.productId group by p.id")
    Page<ProductResponse> findAllProductRes(Pageable pageable);

    @Query(value = "select new ecommerce.backend.demo.payload.responce.ProductResponse(p.id, p.price, p.discount, p.description, sum(od.num) as sumNum) from Product p left join OrderDetails od on p.id = od.productId group by  p.id order by p.discount desc ")
    Page<?> findTopSaleProducts(Pageable pageable);

    @Query(value = "select  new ecommerce.backend.demo.payload.responce.DetailProductResponse(p.id, p.price, p.discount, p.description, sum(od.num)) from Product p left join OrderDetails od on p.id = od.productId where p.id = ?1 group by p.id ")
    DetailProductResponse findProductById(Long id);
}
