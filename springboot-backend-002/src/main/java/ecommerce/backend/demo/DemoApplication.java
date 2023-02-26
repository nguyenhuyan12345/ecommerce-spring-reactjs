package ecommerce.backend.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.xml.MarshallingHttpMessageConverter;
import org.springframework.oxm.xstream.XStreamMarshaller;

@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
//    @Bean
//    public HttpMessageConverter<Object> createXmlHttpMessageConverter()
//    {
//        final MarshallingHttpMessageConverter xmlConverter = new MarshallingHttpMessageConverter();
//        final XStreamMarshaller xstreamMarshaller = new XStreamMarshaller();
//        xstreamMarshaller.setAutodetectAnnotations(true);
//        xmlConverter.setMarshaller(xstreamMarshallerller);
//        return xmlConverter;);
//        xmlConverter.setUnmarshaller(xstreamMarsha
//    }
}
