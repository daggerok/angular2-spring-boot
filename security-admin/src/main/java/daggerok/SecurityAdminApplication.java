package daggerok;

import daggerok.config.AdminConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import(AdminConfig.class)
public class SecurityAdminApplication {

    public static void main(String[] args) {
        SpringApplication.run(SecurityAdminApplication.class, args);
    }
}
