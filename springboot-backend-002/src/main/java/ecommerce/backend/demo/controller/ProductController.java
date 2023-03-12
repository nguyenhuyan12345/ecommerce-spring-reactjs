package ecommerce.backend.demo.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import ecommerce.backend.demo.SecurityConfigure.jwt.JwtTokenProvider;
import ecommerce.backend.demo.entities.Product;
import ecommerce.backend.demo.payload.dto.ProductColorDto;
import ecommerce.backend.demo.payload.request.ProductRequestMapper;
import ecommerce.backend.demo.payload.responce.MessageResponse;
import ecommerce.backend.demo.payload.responce.TopNewProductResponse;
import ecommerce.backend.demo.sevice.ProductService;
import ecommerce.backend.demo.sevice.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
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
    public List<TopNewProductResponse> getNewProducts(@RequestParam(name = "page", defaultValue = "0") Integer page, @RequestParam(name = "perPage", defaultValue = "6") Integer perPage) {
        return productService.findTopNew(page, perPage);
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
//    @GetMapping(value = "/list/new-products")
//    public List<Product> getNewProducts(@RequestParam(name = "page", defaultValue = "0") Integer page, @RequestParam(name = "perPage", defaultValue = "32") Integer perPage) {
//        return productService.findNewProduct(page, perPage);
//    }

    // Product Page UrL
    @GetMapping(value = "/list/products")
    public List<Product> getProducts(@RequestParam(name = "page", defaultValue = "0") Integer page, @RequestParam(name = "perPage", defaultValue = "32") Integer perPage) {
        return productService.findAll(page, perPage);
    }

    // Top Selling Page Url
    @GetMapping(value = "/list/top-selling")
    public List<Product> getTopSellingProducts(@RequestParam(name = "page", defaultValue = "0") Integer page, @RequestParam(name = "perPage", defaultValue = "16") Integer perPage) {
        return productService.findTopSellingProducts(page, perPage);
    }


    @GetMapping(value = "/list")
    public List<Product> getAllProduct() {
        return productService.findAll();
    }

    @GetMapping(value = "/list/{page}/{perPage}")
    public List<Product> getPageProduct(@PathVariable(required = false) int page, @PathVariable(required = false) int perPage) {
        return productService.findAll(page, perPage);
    }

    @GetMapping("/get/{id}")
    public Product getProduct(@PathVariable Long id) {
        return productService.findByID(id);
    }

    @PostMapping(value = "/add", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> addProduct(@RequestPart(name = "json", required = false) String json ,
                                        @RequestPart(name = "fileMainImage", required = false) MultipartFile mainImage,
                                        @RequestPart(name = "multiFileImage", required = false) MultipartFile[] multiFileImage,
                                        @RequestPart(name = "imageProductColors", required = false) MultipartFile[] imageProductColors  ,
                                        @RequestHeader(value = "Authorization", required = false) String authorization) throws IOException {

        ObjectMapper mapper = new ObjectMapper();

        ProductRequestMapper productRequestMapper = mapper.readValue(json, ProductRequestMapper.class);

        productRequestMapper.setFileMainImage(mainImage);
        productRequestMapper.setMultiFileImage(multiFileImage);

        ArrayList<ProductColorDto> list = productRequestMapper.getProductColorDtoList();

        for (int i = 0; i < list.size(); i ++) {
            list.get(i).setFile(imageProductColors[i]);
        }

        productRequestMapper.setProductColorDtoList(list);

        String jwt = authorization.substring(7);
        Long userId = tokenProvider.getUserIdFromJWT(jwt);

        if (productRequestMapper == null) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Thêm sản phẩm không thành công"));
        }

        return ResponseEntity.ok(productService.save(productRequestMapper, userId));
//        return null;
    }
}
