spring-cloud-stream [![build](https://travis-ci.org/daggerok/spring-cloud-stream.svg?branch=stream-app)](https://travis-ci.org/daggerok/spring-cloud-stream)
===================

using rabbit

```fish
docker-compose up -d
gradle --parallel :producer:bootRun :consumer:bootRun
^C
docker-compose down
```
