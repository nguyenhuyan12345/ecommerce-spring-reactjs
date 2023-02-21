package ecommerce.backend.demo.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CartController {

    @GetMapping("/cart/list")
    public String getCartList() {
        return "Lấy danh sách giỏ hàng";
    }
}
