package ecommerce.backend.demo.repository;

import ecommerce.backend.demo.entities.Gallery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface GalleryRepository extends JpaRepository<Gallery, Long> {
}
