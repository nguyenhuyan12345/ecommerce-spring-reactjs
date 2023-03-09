package ecommerce.backend.demo.controller;

import ecommerce.backend.demo.SecurityConfigure.jwt.JwtTokenProvider;
import ecommerce.backend.demo.entities.Product;
import ecommerce.backend.demo.entities.User;
import ecommerce.backend.demo.payload.request.ProduceRequestPage;
import ecommerce.backend.demo.payload.request.ProductRequest;
import ecommerce.backend.demo.payload.responce.MessageResponse;
import ecommerce.backend.demo.sevice.ProductService;
import ecommerce.backend.demo.sevice.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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
    public List<Product> getNewProducts(@RequestParam(name = "limit", defaultValue = "10") Integer limit) {
        return productService.findTopNew(limit);
    }

    @GetMapping(value = "/list/top-order")
    public List<Product> getTopOrders(@RequestParam(name = "limit", defaultValue = "10") Integer limit) {
        return productService.findTopOrder(limit);
    }

    @GetMapping(value = "/list/top-coat")
    public List<Product> getTopCoats(@RequestParam(name = "limit", defaultValue = "10") Integer limit) {
        return productService.findTopCoat(limit);
    }

    // New Product Page Url
    @GetMapping(value = "/list/new-products")
    public List<Product> getNewProducts(@RequestParam(name = "page", defaultValue = "0") Integer page, @RequestParam(name = "perPage", defaultValue = "32") Integer perPage) {
        return productService.findNewProduct(page, perPage);
    }

    // Product Page UrL
    @GetMapping(value = "/list/products")
    public List<Product> getProducts(@RequestParam(name = "page", defaultValue = "0") Integer page, @RequestParam(name = "perPage", defaultValue = "32") Integer perPage) {
        return productService.findAll(page, perPage);
    }

    // Top Selling Page Url
    @GetMapping(value = "/list/top-selling")
    public  List<Product> getTopSellingProducts(@RequestParam(name = "page", defaultValue = "0") Integer page, @RequestParam(name = "perPage", defaultValue = "16") Integer perPage) {
        return productService.findTopSellingProducts(page, perPage);
    }


//    @GetMapping(value = "/list")
//    public List<Product> getAllProduct() {
//        return productService.findAll();
//    }

    @GetMapping(value = "/list/{page}/{perPage}")
    public List<Product> getPageProduct(@PathVariable(required = false) int page, @PathVariable(required = false) int perPage) {
        return productService.findAll(page, perPage);
    }

    @GetMapping("/get/{id}")
    public Product getProduct(@PathVariable Long id) {
        return productService.findByID(id);
    }

    @PostMapping(value = "/add", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> addProduct(@Valid ProductRequest productRequest, BindingResult bindingResult, @RequestHeader(value = "Authorization", required = false) String authorization) {

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
