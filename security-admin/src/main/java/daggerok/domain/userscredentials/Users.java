package daggerok.domain.userscredentials;

import lombok.Data;

import java.util.HashMap;
import java.util.Map;

@Data
public class Users {
    private Map<String, User> credentials = new HashMap<>();
}
