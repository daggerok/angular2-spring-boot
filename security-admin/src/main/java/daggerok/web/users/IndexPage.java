package daggerok.web.users;

import daggerok.web.users.model.Users;
import daggerok.web.users.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;

import static daggerok.web.commons.Principal.setup;

@Controller
@RequiredArgsConstructor
public class IndexPage {

    final UserService userService;

    @ModelAttribute(Users.MODEL_NAME)
    public Users users() {
        return new Users(userService.getUsers());
    }

    @SneakyThrows
    @RequestMapping("/")
    public String index(final Principal principal, final Model model) {

        setup(principal, model);
        return "users";
    }
}
