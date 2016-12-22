package daggerok.config.web;

import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.web.servlet.ErrorPage;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Configuration
public class SpaFallbackConfig {

    @Bean
    public EmbeddedServletContainerCustomizer containerFallback() {
        return container -> container.addErrorPages(new ErrorPage(NOT_FOUND, "/404"));
    }
}
