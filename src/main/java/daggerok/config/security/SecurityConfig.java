package daggerok.config.security;

import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import static daggerok.config.security.UserCredentialsConfig.User;
import static daggerok.config.security.UserCredentialsConfig.Users;

@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private Users users;

    @Autowired
    @SneakyThrows
    public void configureGlobal(final AuthenticationManagerBuilder auth) {
        users.getCredentials().forEach((key, user) -> addUser(auth, user));
    }

    @SneakyThrows
    private static void addUser(final AuthenticationManagerBuilder auth, final User user) {

        auth.inMemoryAuthentication()
                .withUser(user.getUsername())
                .password(user.getPassword())
                .roles(user.getRole());
    }

    @SneakyThrows
    protected void configure(final HttpSecurity http) {
        // @formatter:off
        http
            .csrf()
                .disable()
            .authorizeRequests()
                .antMatchers("/login*", "/vendors**").permitAll()
                .antMatchers("/admin", "/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            .and()
                .formLogin()
                .loginPage("/login")
                .permitAll()
            .and()
                .logout()
                .clearAuthentication(true)
                .deleteCookies("JSESSIONID")
                .permitAll()
            .and()
                .exceptionHandling()
                .accessDeniedPage("/login?accessDenied");
        // @formatter:on
    }
}