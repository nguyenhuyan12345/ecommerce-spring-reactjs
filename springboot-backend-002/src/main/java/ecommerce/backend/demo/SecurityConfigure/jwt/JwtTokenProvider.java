package ecommerce.backend.demo.SecurityConfigure.jwt;

import ecommerce.backend.demo.entities.CustomUserDetail;
import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
@Slf4j
public class JwtTokenProvider {
    // Khai báo JWT_SECRET (Json web token SECRET(Bí mật)) chí có phía server biết
    private final String JWT_SECRET = "nguyenhuyan";

    // Thời gian có hiệu lực của chuỗi jwt EXPIRATION(Hết hạn);
    private final long JWT_EXPIRATION = 604800000L;

    // Tạo ra JWT từ thông tin user
    public String generateToken(CustomUserDetail userDetail) {
        Date now = new Date(); // Khởi tọa đối tượng để lấy thời gian hiện tại currentTime
        Date expiryDate = new Date(now.getTime() + JWT_EXPIRATION); // Tạo đối tượng expiryDate để lưu thời gian hết hạn của JWT

        return Jwts.builder()
                .setSubject(Long.toString(userDetail.getUser().getId()))
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS256, JWT_SECRET)
                .compact();
    }

    // Lấy thông tin user từ JWT
    public Long getUserIdFromJWT(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(JWT_SECRET)
                .parseClaimsJws(token)
                .getBody();

        return Long.parseLong(claims.getSubject());
    }

    // validate Token
    public boolean validateToken(String authToken) {
        try {
            Jwts.parser().setSigningKey(JWT_SECRET).parseClaimsJws(authToken);
            return true;
        } catch (MalformedJwtException ex) {
            log.error("Invalid JWT token");
        } catch (ExpiredJwtException ex) {
            log.error("Expired JWT token");
        } catch (UnsupportedJwtException ex) {
            log.error("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            log.error("JWT claims string is empty.");
        }
        return false;
    }
}
