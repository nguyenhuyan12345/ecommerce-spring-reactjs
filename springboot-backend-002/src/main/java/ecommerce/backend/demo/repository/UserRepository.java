package ecommerce.backend.demo.repository;

import ecommerce.backend.demo.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
     public User findByEmail(String email);

     public Boolean existsByEmail(String email);

     User findFirstByToken(String token);

}
