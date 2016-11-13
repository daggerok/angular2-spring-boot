package daggerok.web.commons;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import org.springframework.ui.Model;

import static java.util.Objects.nonNull;

public final class Principal {

    @SneakyThrows
    public static void setup(final java.security.Principal principal, final Model model) {

        if (nonNull(principal)) {
            model.addAttribute("jsonPrincipal", new ObjectMapper().writeValueAsString(principal));
            model.addAttribute("principal", principal);
        }
    }

    private Principal() {}
}
