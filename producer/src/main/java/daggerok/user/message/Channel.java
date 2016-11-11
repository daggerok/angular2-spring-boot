package daggerok.user.message;

import org.springframework.cloud.stream.annotation.Output;
import org.springframework.messaging.MessageChannel;

public interface Channel {

    @Output
    MessageChannel userOutputChannel();
}
