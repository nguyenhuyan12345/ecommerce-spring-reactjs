package ecommerce.backend.demo.repository;

import ecommerce.backend.demo.entities.Gallery;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GalleryRepository extends JpaRepository<Gallery, Long> {
}
