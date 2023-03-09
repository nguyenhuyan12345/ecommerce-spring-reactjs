package ecommerce.backend.demo.controller;

import ecommerce.backend.demo.entities.OrderDetails;
import ecommerce.backend.demo.payload.dto.OrderDetailSum;
import ecommerce.backend.demo.repository.OrderDetailsRepository;
import ecommerce.backend.demo.sevice.OrderDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/order-detail")
//@CrossOrigin(origins = "http://localhost:5050")
public class OrderDetailController {
    @Autowired
    OrderDetailsService orderDetailsService;

    @Autowired
    OrderDetailsRepository orderDetailsRepository;

    @GetMapping(value = "/list")
    public List<OrderDetails> getListOrderDetails() {
        return orderDetailsService.testQueryNative();
    }

    @GetMapping(value = "/test")
    public List<OrderDetailSum> testGetListOrderDetails() {
        List<OrderDetailSum> list = new ArrayList<>();
/*        Page<?> pageAll = orderDetailsRepository.testJPQL(PageRequest.of(0,5));
        list = (List<OrderDetails>) pageAll.getContent();*/
        list = orderDetailsRepository.test(PageRequest.of(0,2));
        return list;
    }

}
