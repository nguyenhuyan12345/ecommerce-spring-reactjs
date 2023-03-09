package ecommerce.backend.demo.controller;

import ecommerce.backend.demo.entities.Order;
import ecommerce.backend.demo.entities.Product;
import ecommerce.backend.demo.sevice.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    OrderService orderService;
    
}
