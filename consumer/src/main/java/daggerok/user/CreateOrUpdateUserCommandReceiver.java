package daggerok.user;

import daggerok.user.message.Channel;
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

    final UserWriter userWriter;

    // @StreamListener("input-user-channel") // wrong should be userInputChannel
    @StreamListener("userInputChannel")
    public void onCreateOrUpdate(final User user) {
        val createdUser = userWriter.save(user);
        log.info("user: {} saved.", createdUser);
    }
}
