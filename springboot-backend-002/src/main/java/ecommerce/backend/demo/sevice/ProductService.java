package ecommerce.backend.demo.sevice;

import ecommerce.backend.demo.entities.*;
import ecommerce.backend.demo.payload.dto.InventoryDto;
import ecommerce.backend.demo.payload.dto.ProductColorDto;
import ecommerce.backend.demo.payload.request.ProductRequest;
import ecommerce.backend.demo.payload.responce.ProductColorResponse;
import ecommerce.backend.demo.payload.responce.ProductSaveResponse;
import ecommerce.backend.demo.payload.responce.ProductResponse;
import ecommerce.backend.demo.repository.*;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    @Autowired
    GalleryRepository galleryRepository;

    @Autowired
    OrderDetailsRepository orderDetailsRepository;

    @Autowired
    ProductColorRepository productColorRepository;

    @Autowired
    InventoryRepository inventoryRepository;

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public List<ProductResponse> findAll(int page, int perPage) {
        List<ProductResponse> products = new ArrayList<>();
        Page<?> pageAll = productRepository.findAllProductRes(PageRequest.of(page, perPage));
        products = (List<ProductResponse>) pageAll.getContent();
        for (ProductResponse p : products) {
            Long id = p.getId();
            List<ProductColorResponse> colorImages = productColorRepository.findAllImageById(id);
            p.setColorImages(colorImages);
        }
        return products;
    }

    public List<ProductResponse> findTopNew(Integer page, Integer perPage) {
        List<ProductResponse> products = new ArrayList<>();
        Page<?> pageAll = productRepository.findTopNew(PageRequest.of(page, perPage));
        products = (List<ProductResponse>) pageAll.getContent();
        for (ProductResponse p : products) {
            Long id = p.getId();
            List<ProductColorResponse> colorImages = productColorRepository.findAllImageById(id);
            p.setColorImages(colorImages);
        }
        return products;
    }

    public List<ProductResponse> findTopOrder(Integer page, Integer perPage) {
        List<ProductResponse> products = new ArrayList<>();
        Page<?> pageAll = productRepository.findTopOrderProducts(PageRequest.of(page, perPage));
        products = (List<ProductResponse>) pageAll.getContent();
        for (ProductResponse p : products) {
            Long id = p.getId();
            List<ProductColorResponse> colorImages = productColorRepository.findAllImageById(id);
            p.setColorImages(colorImages);
        }
        return products;
    }

    public List<ProductResponse> findTopCoat(Integer page, Integer perPage) {
        List<ProductResponse> products = new ArrayList<>();
        Page<?> pageAll = productRepository.findTopCoatProducts(PageRequest.of(page, perPage));
        products = (List<ProductResponse>) pageAll.getContent();
        for (ProductResponse p : products) {
            Long id = p.getId();
            List<ProductColorResponse> colorImages = productColorRepository.findAllImageById(id);
            p.setColorImages(colorImages);
        }
        return products;
    }

    public List<ProductResponse> fineTopSale(Integer page, Integer perPage) {
        List<ProductResponse> products = new ArrayList<>();
        Page<?> pageAll = productRepository.findTopSaleProducts(PageRequest.of(page, perPage));
        products = (List<ProductResponse>) pageAll.getContent();
        for (ProductResponse p : products) {
            Long id = p.getId();
            List<ProductColorResponse> colorImages = productColorRepository.findAllImageById(id);
            p.setColorImages(colorImages);
        }
        return products;
    }


    public Product findByID(Long id) {
        Product product = productRepository.findById(id).get();
        return product;
    }


    public ProductSaveResponse save(ProductRequest productRequest, Long useId) {

        // Kiểm tra sản phẩm đã tồn tại chưa
        if (productRepository.findProductByTitle(productRequest.getTitle()) == null) {
            Product product = new Product();

            // Coppy properties
            BeanUtils.copyProperties(productRequest, product);
            product.setUserId(useId);

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

            // Lưu toàn bộ đường dẫn file
            for (String fileName : productRequest.getMultiImage()) {
                Gallery gallery = new Gallery();
                gallery.setProductId(productId);
                gallery.setThumbnail(fileName);
                galleryRepository.save(gallery);
            }

            // Lưu màu ảnh mô tả màu và tồn kho từng màu
            for (ProductColorDto productColorDto : productRequest.getProductColorLists()) {
                ProductColor productColor = new ProductColor();
                productColor.setImage(productColorDto.getFile());
                productColor.setProductColor(productColorDto.getColorName());
                productColor.setProductId(productId);
                productColorRepository.save(productColor);
                Long productColorId = productColor.getId();

                for (InventoryDto inventoryDto : productColorDto.getInventory()) {
                    Inventory inventory = new Inventory();
                    inventory.setProductColorId(Math.toIntExact(productColorId));
                    inventory.setNum(inventoryDto.getNumber());
                    inventory.setSize(inventoryDto.getSize());
                    inventory.setProductID(productId);
                    inventoryRepository.save(inventory);
                }
            }

            return new ProductSaveResponse("Thêm sản phẩm thành công", true);
        } else {
            return new ProductSaveResponse("Sản phẩm đã tồn tại", false);
        }
    }


}