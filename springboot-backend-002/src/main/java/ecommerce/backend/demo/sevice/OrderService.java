package ecommerce.backend.demo.sevice;

import ecommerce.backend.demo.entities.Order;
import ecommerce.backend.demo.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    OrderRepository orderRepository;

    public List<Order> findAll() {
        return orderRepository.findAll();
    }
}
