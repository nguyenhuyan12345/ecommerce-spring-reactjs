package ecommerce.backend.demo.ultils;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;

public class FileUtils {
    public static String FOLDE_MEDIA = "D:\\workspace\\image\\2212\\";

    public static String saveFileFromMultiPartFile(MultipartFile multipartFile) throws IOException {
        if(multipartFile == null){
            return null;
        } else {
            String nameFile = System.currentTimeMillis() + "_" + multipartFile.getOriginalFilename();
            File file = new File(FOLDE_MEDIA + "/" + nameFile);
            if (!file.exists()) {
                file.createNewFile();
            }
            multipartFile.transferTo(file);
            return nameFile;
        }
    }
}
