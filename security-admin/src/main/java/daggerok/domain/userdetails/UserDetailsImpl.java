package daggerok.domain.userdetails;

import daggerok.domain.user.Role;
import daggerok.domain.user.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

import static java.util.stream.Collectors.toList;

class UserDetailsImpl extends User implements UserDetails {

    private static final long serialVersionUID = 2154334577403421723L;

    UserDetailsImpl(final User user) {

        setId(user.getId());
        setUsername(user.getUsername());
        setPassword(user.getPassword());
        setEnabled(user.isEnabled());
        setRoles(user.getRoles());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        return AuthorityUtils.createAuthorityList(
                getRoles().stream().map(Role::getName).collect(toList())
                        .toArray(new String[0]));
    }

    @Override
    public boolean isAccountNonExpired() {
        return super.isEnabled();
    }

    @Override
    public boolean isAccountNonLocked() {
        return super.isEnabled();
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return super.isEnabled();
    }
}
