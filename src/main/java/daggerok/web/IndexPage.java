package daggerok.web;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexPage {

//    /**
//     * handle login, logout (success, error), access denied
//     */
//    @GetMapping({
//            "/login",
////            "/login.html",
//            "/login?error",
//            "/login?logout",
//            "/login?accessDenied", })
//    public String login() {
//        return "/login.html";
//    }

    /**
     * handle home page and any application SPA routes
     */
    @GetMapping(
            produces = MediaType.TEXT_HTML_VALUE,
            path = {
            "",
            "/",
            "/404",
//            "/index.html",
            "/some/custom/application/route", })
    public String index() {
        return "/index.html";
    }
}
