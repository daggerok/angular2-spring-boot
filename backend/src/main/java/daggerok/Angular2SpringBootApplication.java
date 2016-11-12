package daggerok;

import daggerok.config.Angular2SpringBootConfig;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@Slf4j
@SpringBootApplication
@Import(Angular2SpringBootConfig.class)
public class Angular2SpringBootApplication {

    public static void main(String[] args) {

        SpringApplication.run(Angular2SpringBootApplication.class, args);
        log.info("\nrest api: http://localhost:8080/api\nmgmt api: http://localhost:8080");
    }
}
