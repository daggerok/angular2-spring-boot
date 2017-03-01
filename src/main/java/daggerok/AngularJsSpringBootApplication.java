package daggerok;

import daggerok.config.RestRepositoryConfig;
import daggerok.config.web.SpaFallbackConfig;
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
@Import({
        SpaFallbackConfig.class,
        RestRepositoryConfig.class })
public class AngularJsSpringBootApplication {

    @Bean
    public CommandLineRunner testData(UserRestRepository repository) {

        if (repository.count() > 0) {
            return args -> log.info("users already added...");
        }

        return args -> Stream.of("max", "fax")
                .map(s -> new User().setUsername(s))
                .map(repository::save)
                .forEach(u -> log.info("saved user {}", u));
    }

    public static void main(String[] args) {
        SpringApplication.run(AngularJsSpringBootApplication.class, args);
    }
}
