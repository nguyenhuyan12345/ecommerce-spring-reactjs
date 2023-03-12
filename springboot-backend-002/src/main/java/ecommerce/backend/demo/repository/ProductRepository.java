package ecommerce.backend.demo.repository;

import ecommerce.backend.demo.entities.Product;
import ecommerce.backend.demo.payload.responce.TopNewProductResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    Product findProductByTitle(String title);

    @Query(value = "select new ecommerce.backend.demo.payload.responce.TopNewProductResponse(p.id, p.price, p.discount, p.description) from Product p  order by p.createAt desc")
    Page<TopNewProductResponse> findTopNew(Pageable pageable);


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
