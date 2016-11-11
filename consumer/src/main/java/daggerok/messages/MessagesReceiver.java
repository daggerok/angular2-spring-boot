package daggerok.messages;

import daggerok.api.message.Channel;
import daggerok.api.message.Message;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.annotation.StreamListener;

@Slf4j
@EnableBinding(Channel.class)
public class MessagesReceiver {

    @Autowired
    daggerok.api.message.Channel channel;

    @StreamListener(Channel.INPUT)
    public void print(Message payload) {
        log.info("received: {}", payload);
    }
}
