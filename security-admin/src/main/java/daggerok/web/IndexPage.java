package daggerok.web;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;

import static java.util.Objects.nonNull;

@Controller
public class IndexPage {

    @SneakyThrows
    @RequestMapping("/")
    public String index(final Principal principal, final Model model) {

        if (nonNull(principal)) {
            model.addAttribute("principal", new ObjectMapper().writeValueAsString(principal));
        }

        return "index";
    }
}
