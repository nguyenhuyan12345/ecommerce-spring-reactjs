package ecommerce.backend.demo.sevice;


import ecommerce.backend.demo.entities.CustomUserDetail;
import ecommerce.backend.demo.entities.User;
import ecommerce.backend.demo.payload.request.RegisterRequest;
import ecommerce.backend.demo.payload.responce.MessageResponse;
import ecommerce.backend.demo.payload.responce.RegisterConfirmResponse;
import ecommerce.backend.demo.repository.UserRepository;
import ecommerce.backend.demo.sevice.email.MailService;
import ecommerce.backend.demo.ultils.FileUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.io.IOException;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    MailService mailService;

/*    @Autowired
    BCryptPasswordEncoder encoder;*/

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

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public ResponseEntity<?> register(RegisterRequest registerRequest) {
        User user = userRepository.findByEmail(registerRequest.getEmail());
        if (user != null) {
            if (Objects.equals(user.getStatus(), 1)) {
                return ResponseEntity
                        .badRequest()
                        .body(new MessageResponse("Tài khoản đã được kích hoạt!"));
            }
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Tài khoản đã tồn tại vui lòng vào email để kích hoạt tài khoản!"));
        }
        return saveUser(registerRequest);
    }

    public User checkUserName(String userName) {
        return userRepository.findByEmail(userName);
    }


    // Lưu tài khoản vào database
    public ResponseEntity<?> saveUser(RegisterRequest registerRequest) {
/*        registerRequest.setPassword(encoder.encode(registerRequest.getPassword()));*/

        User user = new User();

        BeanUtils.copyProperties(registerRequest, user);
        if (registerRequest.getId() == null) {
            Timestamp currentTime = new Timestamp(System.currentTimeMillis());
            user.setCreateAt(currentTime);
        } else {
            Timestamp currentTime = new Timestamp(System.currentTimeMillis());
            user.setUpdateAt(currentTime);
        }
        String token = UUID.randomUUID().toString();
        user.setStatus(0);
        user.setToken(token);
        mailService.sendVerificationToken(user);
        userRepository.save(user);
        return ResponseEntity.ok(new MessageResponse("Đăng kí tài khoản thành công"));
    }

    public RegisterConfirmResponse registrationConfirm(String token) {
        User user = userRepository.findFirstByToken(token);

        if (user == null) return new RegisterConfirmResponse(false, "Tài khoản không tồn tại");

        if (Objects.equals(user.getStatus(), 1)) {
            user.setToken(null);
            userRepository.save(user);
            return new RegisterConfirmResponse(false, "Token không hợp lệ");
        }

        user.setStatus(1);
        user.setToken(null);
        userRepository.save(user);
        return new RegisterConfirmResponse(true, "Kích hoạt tài khoản thành công");
    }

//    Get by Id
    public User getById(Long id) {
        return userRepository.findById(id).get();
    }
}
