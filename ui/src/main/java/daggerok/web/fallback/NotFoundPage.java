package daggerok.web.fallback;

import org.springframework.boot.web.servlet.ErrorPage;
import org.springframework.boot.web.servlet.ErrorPageRegistrar;
import org.springframework.boot.web.servlet.ErrorPageRegistry;
import org.springframework.http.HttpStatus;

public class NotFoundPage implements ErrorPageRegistrar {

    @Override
    public void registerErrorPages(final ErrorPageRegistry registry) {
        registry.addErrorPages(new ErrorPage(HttpStatus.NOT_FOUND, "/404"));
    }
}
