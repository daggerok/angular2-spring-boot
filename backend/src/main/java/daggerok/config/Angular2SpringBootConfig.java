package daggerok.config;

import daggerok.config.security.SecurityConfig;
import daggerok.config.security.UserCredentialsConfig;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import({SecurityConfig.class, UserCredentialsConfig.class})
public class Angular2SpringBootConfig {}
