package ecommerce.backend.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class PrivateController {

    @GetMapping("/test/userrole")
    public String testUserRole() {
        return "Chỉ người có quyền user mới nhìn được tin nhắn này";
    }

    @GetMapping("/test/adminrole")
    public String testAdminRole() {
        return "Chỉ người có quyền Adim mới nhìn được tin nhắn này";
    }
}
