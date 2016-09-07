package daggerok.domain;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by mak on 9/8/16.
 */
@RepositoryRestResource
public interface UserRestRepository extends JpaRepository<User, Long> {
}
