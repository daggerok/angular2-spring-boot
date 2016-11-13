package daggerok.web.users;

import com.fasterxml.jackson.databind.ObjectMapper;
import daggerok.web.users.model.Users;
import daggerok.web.users.model.WriteUser;
import daggerok.web.users.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import java.security.Principal;

import static daggerok.web.commons.Principal.setup;

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/create")
public class CreateUserPage {

    final UserService userService;
    final ObjectMapper objectMapper;

    @ModelAttribute(Users.MODEL_NAME)
    public Users users() {
        return new Users(userService.getUsers());
    }

    @GetMapping
    @SneakyThrows
    public String index(final Principal principal, final Model model) {

        setup(principal, model);
        return "create";
    }

    @SneakyThrows
    @PostMapping(consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public String create(@Validated @ModelAttribute(WriteUser.MODEL_NAME) final WriteUser writeUser,
                         final BindingResult bindingResult,
                         final Principal principal,
                         final SessionStatus sessionStatus,
                         final RedirectAttributes redirectAttributes) {

        if (bindingResult.hasErrors()) {
            redirectAttributes.mergeAttributes(redirectAttributes.getFlashAttributes());
            return "redirect:/create";
        }
        userService.createUser(writeUser);
        sessionStatus.setComplete();
        return "users";
    }
}
