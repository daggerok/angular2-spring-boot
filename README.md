food-online [![build](https://travis-ci.org/daggerok/spring-cloud-stream.svg?branch=food-online)](https://travis-ci.org/daggerok/spring-cloud-stream)
===========

*fallback durable group: `durable-user` (see consumer/producer application.yml)*

```fish
docker-compose up -d
gradle --parallel bootRun
# ui
open http://0.0.0.0:8080
# mongo
open http://0.0.0.0:8081/db/test/user
# rabbit
open http://0.0.0.0:8082
docker-compose down
```
