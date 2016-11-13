package daggerok.domain.userscredentials;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableAutoConfiguration
@EnableConfigurationProperties
public class UserCredentialsConfig {

    @Bean
    @ConfigurationProperties(prefix = "users")
    public Users users() {
        return new Users();
    }
}
