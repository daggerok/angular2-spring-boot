package daggerok.web.users.model;

import daggerok.domain.user.Role;
import lombok.Data;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.util.List;

@Data
@Accessors(chain = true)
public class ReadOnlyUser implements Serializable {

    private static final long serialVersionUID = -8636628780244545787L;

    String username;
    List<Role> roles;
}
