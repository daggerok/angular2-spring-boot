package daggerok.web.fallback;

import org.springframework.boot.web.servlet.ErrorPageRegistrar;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class NotFoundConfig {

    @Bean
    public ErrorPageRegistrar errorPageRegistrar() {
        return new NotFoundPage();
    }
}
