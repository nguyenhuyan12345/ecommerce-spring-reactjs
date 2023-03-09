package ecommerce.backend.demo.sevice;


import ecommerce.backend.demo.entities.OrderDetails;
import ecommerce.backend.demo.repository.OrderDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderDetailsService {
    @Autowired
    OrderDetailsRepository orderDetailsRepository;

    public List<OrderDetails> testQueryNative() {
        return orderDetailsRepository.testQueryNative();
    }
}
