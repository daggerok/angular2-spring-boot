package daggerok.config.error;

import org.springframework.boot.web.servlet.ErrorPage;
import org.springframework.boot.web.servlet.ErrorPageRegistrar;
import org.springframework.boot.web.servlet.ErrorPageRegistry;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;

@Configuration
public class ErrorConfig {

    @Bean
    public ErrorPageRegistrar errorPageRegistrar(){
        return new Error();
    }

    private static class Error implements ErrorPageRegistrar {

        @Override
        public void registerErrorPages(final ErrorPageRegistry registry) {
            registry.addErrorPages(new ErrorPage(HttpStatus.NOT_FOUND, "/"));
        }
    }
}
