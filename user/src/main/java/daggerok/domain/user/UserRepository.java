package daggerok.domain.user;

import lombok.val;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import java.util.Optional;

import static java.util.Objects.isNull;

@Repository
/*@RepositoryRestResource(
        path = "users", // /api/{entityName(s)}
        itemResourceRel = "user", // _embedde.{entityName(s)}._links.{entityName}
        collectionResourceRel = "users") // _embedde.{entityName(s)}*/
public interface UserRepository extends MongoRepository<User, String> {

    PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();

    Optional<User> findById(@Param("id") final String id);

    Optional<User> findByUsername(@Param("username") final String username);

    default User encodePasswordAndSaveOrUpdate(final User user) {

        if (isNull(user) || isNull(user.getUsername())) {
            throw new IllegalStateException("user or username must not be null.");
        }

        val password = user.getPassword();

        if (isNull(password)) {
            throw new IllegalStateException("user password must not be null.");
        }

        val encodedPassword = PASSWORD_ENCODER.encode(password);
        val optionalUser = findByUsername(user.getUsername());

        if (optionalUser.isPresent()) {
            return save(optionalUser.get().setPassword(encodedPassword));
        }

        return save(user.setPassword(encodedPassword));
    }
/*
    // if superadmin not exists on creation: An Authentication object was not found in the SecurityContext
    @Override
    @PreAuthorize("hasAuthority('SUPERADMIN')")
    <S extends User> S save(S entity);

    @Override
    @PreAuthorize("hasAuthority('SUPERADMIN')")
    <S extends User> List<S> save(Iterable<S> entites);

    @Override
    @PreAuthorize("hasAuthority('SUPERADMIN')")
    <S extends User> S insert(S entity);

    @Override
    @PreAuthorize("hasAuthority('SUPERADMIN')")
    <S extends User> List<S> insert(Iterable<S> entities);

    @Override
    @PreAuthorize("hasAuthority('SUPERADMIN')")
    void delete(String s);

    @Override
    @PreAuthorize("hasAuthority('SUPERADMIN')")
    void delete(User entity);

    @Override
    @PreAuthorize("hasAuthority('SUPERADMIN')")
    void delete(Iterable<? extends User> entities);

    @Override
    @PreAuthorize("hasAuthority('SUPERADMIN')")
    void deleteAll();
*/
}
