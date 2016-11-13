package daggerok.domain.user;

import com.google.common.collect.Lists;
import lombok.val;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

import static java.util.Objects.isNull;
import static java.util.stream.Collectors.toList;

@Repository
public interface RoleRepository extends MongoRepository<Role, String> {
    Optional<Role> findByName(@Param("name") final String name);

    default List<Role> saveOrUpdate(Iterable<Role> entites) {
        return Lists.newArrayList(entites)
                .stream()
                .map(this::saveOrUpdate)
                .collect(toList());
    }

    default Role saveOrUpdate(final Role role) {

        if (isNull(role) || isNull(role.getName())) {
            throw new IllegalStateException("role or name must not be null.");
        }

        val optionalRole = findByName(role.getName());

        if (optionalRole.isPresent()) {
            return save(optionalRole.get().setName(role.getName()));
        }

        return save(role);
    }
}
