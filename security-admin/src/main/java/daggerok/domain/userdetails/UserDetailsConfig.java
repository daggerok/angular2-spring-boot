package daggerok.domain.userdetails;

import daggerok.domain.user.Role;
import daggerok.domain.user.User;
import daggerok.domain.user.UserRepository;
import lombok.val;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import java.util.stream.Stream;

import static daggerok.config.security.Constants.OPERATOR;
import static daggerok.config.security.Constants.SUPERADMIN;
import static java.util.Collections.singletonList;

@Configuration
@ComponentScan(basePackageClasses = UserDetailsServiceImpl.class)
public class UserDetailsConfig {

    @Bean
    CommandLineRunner testData(final UserRepository userRepository) {

        val operator = "operator";
        val superadmin = "superadmin";

        return args -> Stream.of(
                new User().setUsername(superadmin)
                        .setPassword(superadmin)
                        .setRoles(singletonList(new Role().setName(SUPERADMIN)))
                        .setEnabled(true),
                new User().setUsername(operator)
                        .setPassword(operator)
                        .setRoles(singletonList(new Role().setName(OPERATOR)))
                        .setEnabled(true))
                .forEach(userRepository::encodePasswordAndSaveOrUpdate);
    }
}
