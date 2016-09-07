package daggerok;

import daggerok.config.RestRepositoryConfig;
import daggerok.domain.User;
import daggerok.domain.UserRestRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;

import java.util.stream.Stream;

@Slf4j
@SpringBootApplication
@Import(RestRepositoryConfig.class)
public class Angular2SpringBootApplication {

    @Bean
    public CommandLineRunner testData(UserRestRepository repository) {

        return args -> Stream.of("max", "fax")
                .map(s -> new User().setUsername(s))
                .forEach(repository::save);
    }

    public static void main(String[] args) {

        SpringApplication.run(Angular2SpringBootApplication.class, args);

        log.info("\nrest api: http://localhost:8080/api\nmgmt api: http://localhost:8080/admin");
    }
}
