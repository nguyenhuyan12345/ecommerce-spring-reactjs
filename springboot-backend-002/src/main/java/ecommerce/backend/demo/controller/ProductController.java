package ecommerce.backend.demo.controller;

import ecommerce.backend.demo.SecurityConfigure.jwt.JwtTokenProvider;
import ecommerce.backend.demo.entities.Product;
import ecommerce.backend.demo.payload.request.ProductRequest;
import ecommerce.backend.demo.payload.responce.MessageResponse;
import ecommerce.backend.demo.payload.responce.ProductResponse;
import ecommerce.backend.demo.sevice.ProductService;
import ecommerce.backend.demo.sevice.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    ProductService productService;

    @Autowired
    JwtTokenProvider tokenProvider;

    @Autowired
    UserService userService;

    // Home Page Url
    @GetMapping(value = "/list/top-new")
    public List<ProductResponse> getNewProducts(@RequestParam(name = "page", defaultValue = "0") Integer page, @RequestParam(name = "perPage", defaultValue = "6") Integer perPage) {
        return productService.findTopNew(page, perPage);
    }

    @GetMapping(value = "/list/top-order")
    public List<ProductResponse> getTopOrders(@RequestParam(name = "page", defaultValue = "0") Integer page, @RequestParam(name = "perPage", defaultValue = "6") Integer perPage) {
        return productService.findTopOrder(page, perPage);
    }

    @GetMapping(value = "/list/top-coat")
    public List<ProductResponse> getTopCoats(@RequestParam(name = "page", defaultValue = "0") Integer page, @RequestParam(name = "perPage", defaultValue = "6") Integer perPage) {
        return productService.findTopCoat(page, perPage);
    }

    @GetMapping(value = "/list/top-sale")
    public List<ProductResponse> getTopSale(@RequestParam(name = "page", defaultValue = "0") Integer page, @RequestParam(name = "perPage", defaultValue = "6") Integer perPage) {
        return productService.fineTopSale(page, perPage);
    }

    // Product Page UrL
    @GetMapping(value = "/list")
    public List<ProductResponse> getProducts(@RequestParam(name = "page", defaultValue = "0") Integer page, @RequestParam(name = "perPage", defaultValue = "6") Integer perPage) {
        return productService.findAll(page, perPage);
    }


    @GetMapping("/get/{id}")
    public Product getProduct(@PathVariable Long id) {
        return productService.findByID(id);
    }


    @PostMapping(value = "/add")
    public ResponseEntity<?> addProduct(@RequestBody(required = false) ProductRequest productRequest, @RequestHeader(name = "Authorization") String authorization) {

        // Get use id from JWT
        String jwt = authorization.substring(7);
        Long userId = tokenProvider.getUserIdFromJWT(jwt);

        if (productRequest == null) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Thêm sản phẩm không thành công"));
        }

        return ResponseEntity.ok(productService.save(productRequest, userId));
    }
}
