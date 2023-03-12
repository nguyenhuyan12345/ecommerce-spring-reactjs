package ecommerce.backend.demo.sevice;

import ecommerce.backend.demo.entities.*;
import ecommerce.backend.demo.payload.dto.InventoryDto;
import ecommerce.backend.demo.payload.dto.ProductColorDto;
import ecommerce.backend.demo.payload.request.ProductRequestMapper;
import ecommerce.backend.demo.payload.responce.ProductColorResponse;
import ecommerce.backend.demo.payload.responce.ProductSaveResponse;
import ecommerce.backend.demo.payload.responce.TopNewProductResponse;
import ecommerce.backend.demo.repository.*;
import ecommerce.backend.demo.ultils.FileUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
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

    public List<Product> findAll(int page, int perPage) {
        List<Product> listProduct = new ArrayList<>();
        Page<?> pageAll = productRepository.findAll(PageRequest.of(page, perPage));
        listProduct = (List<Product>) pageAll.getContent();
        return listProduct;
    }

    public List<TopNewProductResponse> findTopNew(Integer page, Integer perPage) {
        List<TopNewProductResponse> products = new ArrayList<>();
        Page<?> pageAll = productRepository.findTopNew(PageRequest.of(page, perPage));
        products = (List<TopNewProductResponse>) pageAll.getContent();
        for (TopNewProductResponse p : products) {
            Long id = p.getId();
            List<ProductColorResponse> colorImages = productColorRepository.findAllImageById(id);
            p.setColorImages(colorImages);
        }
        return products;
    }

    public List<Product> findTopOrder(Integer limit) {
        List<Product> products = new ArrayList<>();
        products = productRepository.findTopOrderProducts(limit);
        return products;
    }

    public List<Product> findTopCoat(Integer limit) {
        List<Product> products = new ArrayList<>();
        products = productRepository.findTopCoatProducts(limit);
/*        for (Product p : products) {
            long sumNumOrder = 0;
            for (OrderDetails o : p.getOrderDetails()) {
                sumNumOrder += o.getNum();
            }
            p.setSumNumOrder(sumNumOrder);
        }*/
        return products;
    }

    public List<Product> findNewProduct(Integer page, Integer perPage) {
        List<Product> newProducts = new ArrayList<>();
        Page<?> pageAll = productRepository.findAll(PageRequest.of(page, perPage, Sort.by(Sort.Direction.DESC, "createAt")));
        newProducts = (List<Product>) pageAll.getContent();
/*        for (Product p : newProducts) {
            long sumNumOrder = 0;
            for (OrderDetails o : p.getOrderDetails()) {
                sumNumOrder += o.getNum();
            }
            p.setSumNumOrder(sumNumOrder);
        }*/
        return newProducts;
    }

    public List<Product> findTopSellingProducts(Integer page, Integer prePage) {
        List<Product> products = new ArrayList<>();
        try {
            Page<?> page1 = orderDetailsRepository.findTopSumNum(PageRequest.of(page, prePage));
            System.out.println(page1.getContent());
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println(e);
        }

        return products;
    }


    public Product findByID(Long id) {
        Product product = productRepository.findById(id).get();
        return product;
    }


    public ProductSaveResponse save(ProductRequestMapper productRequest, Long useId) throws IOException {

        // Kiểm tra sản phẩm đã tồn tại chưa
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

            // Lưu multiImage
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

            // Lưu màu ảnh mô tả màu và tồn kho từng màu
            List<ProductColorDto> list = productRequest.getProductColorDtoList();
            for (ProductColorDto productColorDto : list) {
                ProductColor productColor = new ProductColor();
                productColor.setImage(FileUtils.saveFileFromMultiPartFile(productColorDto.getFile()));
                productColor.setProductColor(productColorDto.getColorName());
                productColor.setProductId(productId);
                productColorRepository.save(productColor);
                Long productColorId = productColor.getId();

                ArrayList<InventoryDto> list1 = productColorDto.getInventories();
                for (InventoryDto inventoryDto : list1) {
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