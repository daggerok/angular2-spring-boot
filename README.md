cqrs-command [![build](https://travis-ci.org/daggerok/spring-cloud-stream.svg?branch=cqrs-command)](https://travis-ci.org/daggerok/spring-cloud-stream)
============

**client**:
- producer channel: `daggerok.user.message.Channel#userOutputChannel`
- cqrs user command sender: (frontend access via rest endpoint) `CreateOrUpdateUserCommandSender`

**backend**:
- consumer channel: `daggerok.user.message.Channel#userInputChannel`
- cqrs user command receiver (backend access to db user writer `writer.UserWriter`): `CreateOrUpdateUserCommandReceiver`

*fallback durable group: `durable-user` (see consumer/producer application.yml)*

used messaging: rabbit

```fish
docker-compose up -d
gradle --parallel :producer:bootRun :consumer:bootRun
^C
open http://0.0.0.0:8081/db/test/user
docker-compose down
```
