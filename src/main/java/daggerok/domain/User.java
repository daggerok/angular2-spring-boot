package daggerok.domain;

import lombok.Data;
import lombok.experimental.Accessors;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Data
@Entity
@Accessors(chain = true)
public class User implements Serializable {

    private static final long serialVersionUID = 8347356930292745091L;

    @Id @GeneratedValue Long id;
    String username;
}
