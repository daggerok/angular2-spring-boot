package daggerok.user.writer;

import daggerok.api.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserWriter extends MongoRepository<User, String> {}
