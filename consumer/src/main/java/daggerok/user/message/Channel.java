package daggerok.user.message;

import org.springframework.cloud.stream.annotation.Input;
import org.springframework.messaging.MessageChannel;

public interface Channel {

    @Input
    MessageChannel userInputChannel();
}
