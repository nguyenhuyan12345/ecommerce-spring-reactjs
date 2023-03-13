package ecommerce.backend.demo.controller;

import ecommerce.backend.demo.payload.responce.SaveFileResponse;
import ecommerce.backend.demo.payload.responce.SaveMultiFileResponse;
import ecommerce.backend.demo.ultils.FileUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/public")
public class PublicController {

    @GetMapping("/test")
    public String test() {
        return "Truy cập thành công";
    }

    @PostMapping("/save-file")
    public SaveFileResponse saveFileToServer(@RequestPart(value = "file", required = false) MultipartFile file) {
        try {
            String fileName = FileUtils.saveFileFromMultiPartFile(file);
            return new SaveFileResponse(fileName, true, "Lưu file vào server thành công");
        } catch (IOException e) {
            e.printStackTrace();
            return new SaveFileResponse(false, "Lưu file không thành công");
        }
    }

    @PostMapping("/save-multi-file")
    public SaveMultiFileResponse saveMultiFileServer(@RequestPart(value = "multiFiles", required = false) MultipartFile[] multipartFiles) {
        try {
            List<String> fileNames = new ArrayList<>();
            for (MultipartFile m : multipartFiles) {
                String fileName = FileUtils.saveFileFromMultiPartFile(m);
                fileNames.add(fileName);
            }
            return new SaveMultiFileResponse(fileNames, true, "Lưu file thành công");
        } catch (IOException e) {
            e.printStackTrace();
            return new SaveMultiFileResponse(false, "Lưu file không thành công");
        }
    }
}
