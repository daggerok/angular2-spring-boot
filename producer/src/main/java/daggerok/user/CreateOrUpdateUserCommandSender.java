package daggerok.user;

import daggerok.api.domain.Channel;
import daggerok.api.domain.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.context.annotation.Bean;
import org.springframework.integration.annotation.InboundChannelAdapter;
import org.springframework.integration.annotation.Poller;
import org.springframework.integration.core.MessageSource;
import org.springframework.integration.support.MessageBuilder;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Slf4j
@EnableAsync
@EnableScheduling
@RequiredArgsConstructor
@EnableBinding(Channel.class)
public class CreateOrUpdateUserCommandSender {

    // @Bean
    public User defaultUser() {
        return new User()
                .setRole("USER-" + LocalDateTime.now()
                        .format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")))
                .setUsername("user-" + LocalDateTime.now()
                        .format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:s")))
                .setPassword("password-" + LocalDateTime.now()
                        .format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:S")));
    }

    @Bean
    @InboundChannelAdapter(
            value = Channel.OUTPUT,
            // poller = @Poller(fixedDelay = "500000", maxMessagesPerPoll = "2"))
            poller = @Poller(fixedDelay = "${fixedDelay}", maxMessagesPerPoll = "1"))
    public MessageSource<User> onCreateOrUpdate() {

        log.info("saving {}...", defaultUser());
        return () -> MessageBuilder.withPayload(defaultUser()).build();
    }
}
