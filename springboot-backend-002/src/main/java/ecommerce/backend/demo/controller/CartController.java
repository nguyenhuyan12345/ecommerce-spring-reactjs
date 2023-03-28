package ecommerce.backend.demo.controller;


import ecommerce.backend.demo.SecurityConfigure.jwt.JwtTokenProvider;
import ecommerce.backend.demo.entities.Cart;
import ecommerce.backend.demo.payload.request.CartRequest;
import ecommerce.backend.demo.payload.responce.AddCartResponse;
import ecommerce.backend.demo.sevice.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/cart")
public class CartController {
    @Autowired
    CartService cartService;

    @Autowired
    JwtTokenProvider tokenProvider;

    @PostMapping(value = "add", consumes = MediaType.APPLICATION_JSON_VALUE)
    public AddCartResponse addCart(@RequestBody CartRequest cartRequest, @RequestHeader(name = "Authorization") String authorization) {
        // Get use id from JWT
        String jwt = authorization.substring(7);
        Long userId = tokenProvider.getUserIdFromJWT(jwt);

        cartRequest.setUserId(Math.toIntExact(userId));

        return cartService.addCart(cartRequest);
    }

    @GetMapping(value = "get")
    public List<Cart> getCartByUser(@RequestHeader(name = "Authorization") String authorization) {
        // Get use id from JWT
        String jwt = authorization.substring(7);
        Integer userId = Math.toIntExact(tokenProvider.getUserIdFromJWT(jwt));

        return cartService.getCart(userId);
    }
}
