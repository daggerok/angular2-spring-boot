package daggerok.web.users.service;

import daggerok.web.users.model.ReadOnlyUser;
import daggerok.web.users.model.WriteUser;

import java.util.List;

public interface UserService {

    List<ReadOnlyUser> getUsers();

    void createUser(final WriteUser writeUser);
}
