package ecommerce.backend.demo.repository;

import ecommerce.backend.demo.entities.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    Product findProductByTitle(String title);

    @Query(value = "select * from sale_site_1.product as p order by p.create_at desc limit ?1", nativeQuery = true)
    List<Product> findTopNew(Integer limit);

/*    @Query(value = "SELECT p FROM Product p left join OrderDetails o order by p.createAt DESC")
    Page<Product> findTopNew(Pageable pageable);*/

/*    @Query(value = "SELECT p, sum (o.num) as sumNum FROM OrderDetails o left join Product p order by p.createAt desc")
    Page<Product> findTopNew(Pageable pageable);*/

    @Query(value = "select p.*, sum(od_t.num) as \"sum_order\" from sale_site_1.order_details as od_t left join " +
            "sale_site_1.product as p on od_t.product_id = p.id group by od_t.product_id order by od_t.product_id LIMIT ?1",
            nativeQuery = true)
    List<Product> findTopOrderProducts(Integer limit);

    @Query(value = "select pp.* from (select p.*, sum(od_t.num) as \"sum_order\" from sale_site_1.order_details as od_t left join" +
            " sale_site_1.product as p on od_t.product_id = p.id group by od_t.product_id order by od_t.product_id) as pp " +
            "where pp.category = \"Áo khoác\" order by pp.sum_order desc limit ?1",
            nativeQuery = true)
    List<Product> findTopCoatProducts(Integer limit);

    @Query(value = "SELECT * FROM order_details as o left join product as p on o.product_id = p.id ",
            nativeQuery = true)
    Page<Product> findTopSellingProducts(Pageable pageable);
}
