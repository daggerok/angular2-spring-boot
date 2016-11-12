package daggerok.web;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

import javax.servlet.ServletContext;

@Controller
public class Spa {

    /**
     * handle login, logout (success, error), access denied
     */
    @GetMapping({
            "/login",
            "/login.html",
            "/login?error",
            "/login?logout",
            "/login?accessDenied", })
    public String login() {
        return "login";
    }

    /**
     * handle home page and any application SPA routes
     */
    @GetMapping(
            produces = MediaType.TEXT_HTML_VALUE,
            path = {
            "",
            "/",
            "/index.html",
            "/some/custom/application/route", })
    public String index() {
        return "index";
    }
}
