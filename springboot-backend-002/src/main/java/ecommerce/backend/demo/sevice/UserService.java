package ecommerce.backend.demo.sevice;


import ecommerce.backend.demo.entities.CustomUserDetail;
import ecommerce.backend.demo.entities.User;
import ecommerce.backend.demo.payload.request.RegisterRequest;
import ecommerce.backend.demo.repository.UserRepository;
import ecommerce.backend.demo.ultils.FileUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.io.IOException;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    UserRepository userRepository;

    // Phương thức này sẽ được spring security gọi tự động
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Kiểm tra xem user có tồn tại trong database không?
        User user = userRepository.findByEmail(username);
        if (user == null) {
            throw new UsernameNotFoundException(username);
        }
        return new CustomUserDetail(user);
    }

    @Transactional
    public UserDetails loadUserById(Long id) {
        User user = userRepository.findById(id).orElseThrow(
                () -> new UsernameNotFoundException("User not found with id : " + id)
        );
        return new CustomUserDetail(user);
    }

    // Phương thức tìm toàn bộ tài khoản
    public List<User> findAll() {
        return userRepository.findAll();
    }

    // Phương thức kiểm tra tài khoản đã tồn tại hay chưa trả về kiểu Boolean
    public Boolean checkUserName(String userName) {
        // Trường hợp này tên đăng nhập là tên địa chỉ email
        return userRepository.existsByEmail(userName);
    }

    // Lưu tài khoản vào database
    public String saveUser(RegisterRequest registerRequest) {
        User user = new User();

        BeanUtils.copyProperties(registerRequest, user);
        if (registerRequest.getId() == null) {
            Timestamp currentTime = new Timestamp(System.currentTimeMillis());
            user.setCreateAt(currentTime);
        } else {
            Timestamp currentTime = new Timestamp(System.currentTimeMillis());
            user.setUpdateAt(currentTime);
        }

        userRepository.save(user);
        return "Đã lưu tài khoản thành công";
    }

//    Get by Id
    public User getById(Long id) {
        return userRepository.findById(id).get();
    }
}
