package daggerok.api.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.experimental.Accessors;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

@Data
@Document
@Accessors(chain = true)
@JsonIgnoreProperties(ignoreUnknown = true)
public class User implements Serializable {


    @Id String id;
    String username;
    String password;
    String role;
}
