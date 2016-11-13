package daggerok.domain.userdetails;

import daggerok.domain.user.Role;
import daggerok.domain.user.RoleRepository;
import daggerok.domain.user.User;
import daggerok.domain.user.UserRepository;
import lombok.val;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import javax.management.relation.RoleNotFoundException;
import java.util.stream.Stream;

import static daggerok.config.security.Constants.OPERATOR;
import static daggerok.config.security.Constants.SUPERADMIN;
import static java.lang.String.format;
import static java.util.Collections.singletonList;

@Configuration
@ComponentScan(basePackageClasses = UserDetailsServiceImpl.class)
public class UserDetailsConfig {

    @Bean
    CommandLineRunner testData(final RoleRepository roleRepository,
                               final UserRepository userRepository) {

        Stream.of(SUPERADMIN, OPERATOR)
                .filter(role -> !roleRepository.findByName(role).isPresent())
                .map(roleName -> new Role().setName(roleName))
                .forEach(roleRepository::save);

        val operator = "operator";
        val superadmin = "superadmin";

        return args -> Stream.of(
                new User().setUsername(superadmin)
                        .setPassword(superadmin)
                        .setRoles(singletonList(
                                roleRepository.findByName(SUPERADMIN)
                                        .orElseThrow(() -> new RoleNotFoundException(
                                                format("role {} wasn't found.", SUPERADMIN)))))
                        .setEnabled(true),
                new User().setUsername(operator)
                        .setPassword(operator)
                        .setRoles(singletonList(
                                roleRepository.findByName(OPERATOR)
                                        .orElseThrow(() -> new RoleNotFoundException(
                                                format("role {} wasn't found.", OPERATOR)))))
                        .setEnabled(true))
                .forEach(userRepository::encodePasswordAndSaveOrUpdate);
    }
}
