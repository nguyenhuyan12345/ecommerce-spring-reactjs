package ecommerce.backend.demo.repository;

import ecommerce.backend.demo.entities.OrderDetails;
import ecommerce.backend.demo.payload.dto.OrderDetailSum;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Long> {

    @Query(value = "SELECT * FROM sale_site_1.order_details", nativeQuery = true)
    List<OrderDetails> testQueryNative();

/*    @Query(value = "SELECT od.*, SUM(od.num) AS \"sum\" FROM sale_site_1.order_details AS od GROUP BY od.product_id ORDER BY sum DESC LIMIT 20", nativeQuery = true)
    List<OrderDetails> findTopSumNum();*/

    @Query(value = "select new ecommerce.backend.demo.payload.dto.OrderDetailSum(p, sum(od.num) as sumNum) from OrderDetails od join Product p on p.id = od.productId group by od.productId order by sumNum desc ")
//    @Query(value = "select new ecommerce.backend.demo.payload.dto.OrderDetailSum(od, od.productId) from OrderDetails od ")
//    @Query(value = "select new ecommerce.backend.demo.payload.dto.OrderDetailSum(p, sum(od_t.num) as sum_order) from sale_site_1.order_details as od_t " +
//            "left join sale_site_1.product as p on od_t.product_id = p.id group by od_t.product_id order by sum_order desc", nativeQuery = true)
    List<OrderDetailSum> test(Pageable pageable);

    @Query(value = "SELECT od.product_id, SUM(od.num) AS \"sum\" FROM sale_site_1.order_details AS od GROUP BY od.product_id ORDER BY sum DESC", nativeQuery = true)
    Page<OrderDetails> findTopSumNum(Pageable pageable);

    @Query(value = "SELECT od from OrderDetails od")
    Page<OrderDetails> testJPQL(Pageable pageable);
}
