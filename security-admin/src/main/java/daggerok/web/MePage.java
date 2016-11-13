package daggerok.web;

import lombok.SneakyThrows;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.security.Principal;

import static daggerok.web.commons.Principal.setup;

@Controller
public class MePage {

    @SneakyThrows
    @GetMapping("/me")
    public String me(final Principal principal, final Model model) {

        setup(principal, model);
        return "me";
    }
}
