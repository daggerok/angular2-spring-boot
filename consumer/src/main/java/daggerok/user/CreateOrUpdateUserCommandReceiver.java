package daggerok.user;

import daggerok.api.domain.Channel;
import daggerok.api.domain.User;
import daggerok.user.writer.UserWriter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import lombok.val;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.annotation.StreamListener;

@Slf4j
@RequiredArgsConstructor
@EnableBinding(Channel.class)
public class CreateOrUpdateUserCommandReceiver {

    final Channel channel;
    final UserWriter userWriter;

    @StreamListener(Channel.INPUT)
    public void onCreateOrUpdate(final User user) {
        val createdUser = userWriter.save(user);
        log.info("user: {} saved.", createdUser);
    }
}

