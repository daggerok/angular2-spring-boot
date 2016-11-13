package daggerok.web.users.service;

import daggerok.domain.user.Role;
import daggerok.domain.user.RoleRepository;
import daggerok.domain.user.User;
import daggerok.domain.user.UserRepository;
import daggerok.web.users.model.ReadOnlyUser;
import daggerok.web.users.model.WriteUser;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.stream.Stream;

import static java.util.Collections.singletonList;
import static java.util.stream.Collectors.toList;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserServiceImpl implements UserService {

    final daggerok.domain.userscredentials.Users users;
    final UserRepository userRepository;
    final RoleRepository roleRepository;

    @Override
    public List<ReadOnlyUser> getUsers() {

        return Stream.concat(
                this.users.getCredentials()
                        .entrySet()
                        .stream()
                        .map(Map.Entry::getValue)
                        .map(user -> new ReadOnlyUser()
                                .setUsername(user.getUsername())
                                .setRoles(singletonList(new Role().setName(user.getRole())))),
                userRepository.findAll()
                        .stream()
                        .map(user -> new ReadOnlyUser()
                                .setUsername(user.getUsername())
                                .setRoles(user.getRoles())))

                .collect(toList());
    }

    @Override
    @Transactional
    public void createUser(final WriteUser writeUser) {

        val username = writeUser.getUsername().trim();
        val password = writeUser.getPassword().trim();
        val roles = getRoles(writeUser.getRoles().trim().toUpperCase());

        roleRepository.saveOrUpdate(roles);
        userRepository.encodePasswordAndSaveOrUpdate(new User()
                .setUsername(username).setPassword(password)
                .setEnabled(true)
                .setRoles(roles));
    }

    private List<Role> getRoles(final String rawRoles) {

        if (rawRoles.contains(",")) {
            return Stream.of(rawRoles.split(","))
                    .map(this::toRole)
                    .collect(toList());
        }

        return singletonList(toRole(rawRoles));
    }

    private Role toRole(final String name) {

        return new Role()
                .setName(name);
    }
}
