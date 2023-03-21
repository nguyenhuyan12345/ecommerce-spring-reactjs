package ecommerce.backend.demo.sevice;

import ecommerce.backend.demo.entities.Cart;
import ecommerce.backend.demo.payload.request.CartRequest;
import ecommerce.backend.demo.payload.responce.AddCartResponse;
import ecommerce.backend.demo.repository.CartRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;

@Service
public class CartService {
    @Autowired
    CartRepository cartRepository;

    public AddCartResponse addCart(CartRequest cartRequest) {
        Cart cart = new Cart();

        BeanUtils.copyProperties(cartRequest, cart);

        Timestamp currentTime = new Timestamp(System.currentTimeMillis());
        if (cart.getId() == null) {
            cart.setCreateAt(currentTime);
        } else {
            cart.setUpdateAt(currentTime);
        }

        try {
            cartRepository.save(cart);
            return new AddCartResponse("Thêm giỏ hàng thành công", true);
        } catch (Exception e) {
            System.out.println(e);
            return new AddCartResponse("Thêm giỏ hàng không thành công", false);
        }
    }
}
