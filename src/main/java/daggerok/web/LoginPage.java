package daggerok.web;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.ServletContext;

@Controller
public class LoginPage {

    /**
     * handle login, logout (success, error), access denied
     */
    @GetMapping({
            "/login",
            "/login.html",
            "/login?logout",})
    public String login() {
        return "login";
    }

    /**
     * handle home page and any application SPA routes
     */
    @GetMapping({
            "",
            "/",
            "/index.html",
            "/some/custom/application/route",})
    public String index() {
        return "index";
    }
}
