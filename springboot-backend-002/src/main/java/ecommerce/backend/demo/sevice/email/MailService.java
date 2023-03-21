package ecommerce.backend.demo.sevice.email;

import ecommerce.backend.demo.entities.User;

public interface MailService {

    void sendVerificationToken(User user);

//	void resetPasswordToken(final String token, final User user);
//
////	void sendContactMail(Mail mailDTO);
}
