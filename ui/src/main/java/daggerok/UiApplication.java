package daggerok;

import daggerok.web.fallback.NotFoundConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import({ NotFoundConfig.class })
public class UiApplication {

    public static void main(String[] args) {
        SpringApplication.run(UiApplication.class, args);
    }
}
