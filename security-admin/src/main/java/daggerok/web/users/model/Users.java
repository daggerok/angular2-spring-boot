package daggerok.web.users.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
public class Users implements Serializable {
    private static final long serialVersionUID = 6335535533248044325L;

    public static final String MODEL_NAME = "users";

    List<ReadOnlyUser> users;
}
