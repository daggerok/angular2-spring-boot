package daggerok.config.security;

import lombok.Data;
import lombok.Getter;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

@Configuration
@EnableAutoConfiguration
@EnableConfigurationProperties
public class UserCredentialsConfig {

    @Bean
    @ConfigurationProperties(prefix = "users")
    public Users users() {
        return new Users();
    }

    @Getter
    public static class Users {
        private Map<String, User> credentials = new HashMap<>();
    }

    @Data
    public static class User {

        private String username;
        private String password;
        private String role;
    }
}
