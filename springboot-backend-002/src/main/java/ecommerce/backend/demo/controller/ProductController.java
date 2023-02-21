package ecommerce.backend.demo.controller;

import ecommerce.backend.demo.entities.Product;
import ecommerce.backend.demo.payload.request.ProductRequest;
import ecommerce.backend.demo.payload.responce.MessageResponse;
import ecommerce.backend.demo.sevice.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5050")
public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping("/list")
    public List<Product> getAllProduct() {
        return productService.findAll();
    }

    @GetMapping("/get/{id}")
    public Product getProduct(@PathVariable Long id) {
        return productService.findByID(id);
    }

    @PostMapping(value = "/add" /*, consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE}*/)
    public ResponseEntity<?> addProduct(@RequestPart(value = "id", required = false) String id,
                                        @RequestPart(value = "title", required = false) String title,
                                        @RequestPart(value = "price", required = false) String price,
                                        @RequestPart(value = "category", required = false) String category,
                                        @RequestPart(value = "discount", required = false) String discount,
                                        @RequestPart(value = "description", required = false) String description,
                                        @RequestPart(value = "fileMainImage", required = false) MultipartFile fileMainImage,
                                        @RequestPart(value = "multiFileImage", required = false) MultipartFile[] multiFileImage) {

        ProductRequest productRequest = new ProductRequest();
        if (id != null) {
            productRequest.setId(Long.parseLong(id));
        }
        if (title != null) {
            productRequest.setTitle(title);
        }
        if (price != null) {
            productRequest.setPrice(Long.parseLong(price));
        }
        if (discount != null) {
            productRequest.setDiscount(Long.parseLong(discount));
        }
        if (description != null) {
            productRequest.setDescription(description);
        }
        if (category != null) {
            productRequest.setCategory(category);
        }
        if (fileMainImage != null) {
            productRequest.setFileMainImage(fileMainImage);
        }
        if (multiFileImage != null) {
            productRequest.setMultiFileImage(multiFileImage);
        }

        if (productRequest == null) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("không nhận được sản phẩm"));
        }

        //Code logic save product
        return ResponseEntity.ok(productService.save(productRequest));
    }
}
