package daggerok.user.reader;

import daggerok.api.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserReader extends MongoRepository<User, String> {

    String OPERATION_NOT_SUPPORTED = "OPERATION_NOT_SUPPORTED";

    @Override
    default <S extends User> List<S> save(Iterable<S> entites) {
        throw new RuntimeException(OPERATION_NOT_SUPPORTED);
    }

    @Override
    default <S extends User> S save(S entity) {
        throw new RuntimeException(OPERATION_NOT_SUPPORTED);
    }

    @Override
    default void delete(String s) {
        throw new RuntimeException(OPERATION_NOT_SUPPORTED);
    }

    @Override
    default void delete(User entity) {
        throw new RuntimeException(OPERATION_NOT_SUPPORTED);
    }

    @Override
    default void delete(Iterable<? extends User> entities) {
        throw new RuntimeException(OPERATION_NOT_SUPPORTED);
    }

    @Override
    default void deleteAll() {
        throw new RuntimeException(OPERATION_NOT_SUPPORTED);
    }
}
