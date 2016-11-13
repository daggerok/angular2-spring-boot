package daggerok.config.security;

import daggerok.domain.userdetails.UserDetailsConfig;
import daggerok.domain.userdetails.UserDetailsServiceImpl;
import daggerok.domain.userscredentials.User;
import daggerok.domain.userscredentials.UserCredentialsConfig;
import daggerok.domain.userscredentials.Users;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.authority.AuthorityUtils;

import static daggerok.config.security.Constants.*;
import static daggerok.domain.user.UserRepository.PASSWORD_ENCODER;

@Configuration
@Import({UserCredentialsConfig.class, UserDetailsConfig.class})
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    Users users;

    @Autowired
    UserDetailsServiceImpl userDetailsServiceImpl;

    @Override
    @SneakyThrows
    protected void configure(final HttpSecurity http) {
        // @formatter:off
        http
            .csrf()
                .disable()
            .authorizeRequests()
                .antMatchers(PUBLIC_MAPPINGS).permitAll()
                .antMatchers(ADMIN_MAPPINGS).hasAuthority(SUPERADMIN)
                .antMatchers(HttpMethod.PUT, API_MAPPINGS).hasAuthority(SUPERADMIN)
                .antMatchers(HttpMethod.POST, API_MAPPINGS).hasAuthority(SUPERADMIN)
                .antMatchers(HttpMethod.PATCH, API_MAPPINGS).hasAuthority(SUPERADMIN)
                .antMatchers(HttpMethod.DELETE, API_MAPPINGS).hasAuthority(SUPERADMIN)
                .anyRequest().authenticated()
                .and()
            .formLogin()
                .permitAll()
                .and()
            .logout()
                .deleteCookies(JSESSIONID)
                .clearAuthentication(true)
                .invalidateHttpSession(true)
                .permitAll();
        // @formatter:on
    }

    @Override
    @Autowired
    @SneakyThrows
    protected void configure(final AuthenticationManagerBuilder auth) {

        users.getCredentials().forEach((key, user) -> addUser(auth, user));

        // @formatter:off
        auth// local users:
            .inMemoryAuthentication()
                .withUser("admin")
                    .password("admin")
                    .roles(LOCAL_USER, LOCAL_ADMIN)
                    .authorities(AuthorityUtils.createAuthorityList(LOCAL_USER, LOCAL_ADMIN))
            .and()
                .withUser("user")
                    .password("user")
                    .roles(LOCAL_USER)
                    .authorities(AuthorityUtils.createAuthorityList(LOCAL_USER))
                .and()
        .and()// mongo db users:
            .userDetailsService(userDetailsServiceImpl)
                .passwordEncoder(PASSWORD_ENCODER);
        // @formatter:on
    }

    @SneakyThrows
    private static void addUser(final AuthenticationManagerBuilder auth, final User user) {

        auth.inMemoryAuthentication()
                .withUser(user.getUsername())
                .password(user.getPassword())
                .roles(user.getRole());
    }
}
