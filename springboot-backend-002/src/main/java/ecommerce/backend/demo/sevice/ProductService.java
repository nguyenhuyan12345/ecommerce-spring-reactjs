package ecommerce.backend.demo.sevice;

import ecommerce.backend.demo.entities.Gallery;
import ecommerce.backend.demo.entities.Product;
import ecommerce.backend.demo.payload.request.ProductRequest;
import ecommerce.backend.demo.payload.responce.ProductSaveResponse;
import ecommerce.backend.demo.repository.GalleryRepository;
import ecommerce.backend.demo.repository.ProductRepository;
import ecommerce.backend.demo.ultils.FileUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    @Autowired
    GalleryRepository galleryRepository;

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public Product findByID(Long id) {
        Product product = productRepository.findById(id).get();
        return product;
    }

    public ProductSaveResponse save(ProductRequest productRequest) {
        Product test = productRepository.findProductByTitle(productRequest.getTitle());

        if (productRepository.findProductByTitle(productRequest.getTitle()) == null) {
            Product product = new Product();

            // Save Main Image
            try {
                productRequest.setMainImage(FileUtils.saveFileFromMultiPartFile(productRequest.getFileMainImage()));
            } catch (IOException e) {
                e.printStackTrace();
            }

            // Coppy properties
            BeanUtils.copyProperties(productRequest, product);

            // Set time
            Timestamp currentTime = new Timestamp(System.currentTimeMillis());
            if (productRequest.getId() == null) {
                product.setCreateAt(currentTime);
            } else {
                product.setUpdateAt(currentTime);
            }

            // Save product
            productRepository.save(product);

            // Get Id
            Long productId = product.getId();

            try {
                List<String> fileNames = new ArrayList<>();
                MultipartFile[] files = productRequest.getMultiFileImage();

                Arrays.asList(files).stream().forEach(file -> {
                    try {
                        fileNames.add(FileUtils.saveFileFromMultiPartFile(file));
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                });

                // Lưu toàn bộ đường dẫn file
                for (String fileName : fileNames) {
                    Gallery gallery = new Gallery();
                    gallery.setProductId(productId);
                    gallery.setThumbnail(fileName);
                    galleryRepository.save(gallery);
                }


            } catch (Exception e) {
                e.printStackTrace();
            }
            return new ProductSaveResponse("Thêm sản phẩm thành công", true);
        } else {
            return new ProductSaveResponse("Sản phẩm đã tồn tại", false);
        }
    }
}