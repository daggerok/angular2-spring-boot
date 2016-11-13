package daggerok.web.users.model;

import lombok.Data;
import lombok.experimental.Accessors;
import org.hibernate.validator.constraints.NotEmpty;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Data
@Accessors(chain = true)
public class WriteUser implements Serializable {

    private static final long serialVersionUID = 4998695847714287547L;

    public static final String MODEL_NAME = "writeUser";

    @NotNull
    @NotEmpty
    @Size(min = 3)
    String username;

    @NotNull
    @NotEmpty
    @Size(min = 7)
    String password;

    @NotNull
    @NotEmpty
    @Size(min = 3)
    String roles;
}
