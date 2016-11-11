package daggerok.messages;

import daggerok.api.message.Channel;
import daggerok.api.message.Message;
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

@EnableAsync
@EnableScheduling
@EnableBinding(Channel.class)
public class MessagesSender {

    @Bean
    @InboundChannelAdapter(
            value = Channel.OUTPUT,
            poller = @Poller(fixedDelay = "500", maxMessagesPerPoll = "1"))
//            poller = @Poller(fixedDelay = "${fixedDelay}", maxMessagesPerPoll = "1"))
    public MessageSource<Message> timerMessageSource() {

        return () -> MessageBuilder
                .withPayload(
                        new Message()
                                .setSubject("holla!")
                                .setBody(LocalDateTime.now()
                                        .format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"))))
                .build();
    }
}
