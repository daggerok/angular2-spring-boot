# custom-security [![build](https://travis-ci.org/daggerok/angular2-spring-boot.svg?branch=custom-security)](https://travis-ci.org/daggerok/angular2-spring-boot)

dev

```fish
gradle bootRun
gradle 'npm start'
```


build

```fish
gradle ui build
gradle --parallel bootRun
```

run

```fish
gradle clean npmInstall npmTest npmBuild build
bash build/libs/*.jar
```
