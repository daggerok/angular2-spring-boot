package daggerok.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Optional;

@Controller
public class Spa {

    @GetMapping({
            "",
            "/",
            "/404",
            "/reports",
            "/projects/{projectId}/index", })
    public String index(@PathVariable final Optional<Long> projectId) {
        return "/index.html";
    }
}
