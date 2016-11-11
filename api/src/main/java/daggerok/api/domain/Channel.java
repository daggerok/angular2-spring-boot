package daggerok.api.domain;

import org.springframework.cloud.stream.annotation.Input;
import org.springframework.cloud.stream.annotation.Output;
import org.springframework.messaging.MessageChannel;

public interface Channel {

    String INPUT = "input";

    @Input(Channel.INPUT)
    MessageChannel input();

    String OUTPUT = "output";

    @Output(Channel.OUTPUT)
    MessageChannel output();
}
