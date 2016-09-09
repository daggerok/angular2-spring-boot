import {
  Component,
  OnInit
} from '@angular/core';
import { ApiService } from './shared';

@Component({
  selector: 'angular2-spring-boot',
  template: require('./app.component.html'),
  styles: [
    require('./app.component.css')
  ],
  providers: [
    ApiService
  ]
})
export class AppComponent implements OnInit {

  title = 'app works!';
  users = [];

  constructor(private apiService: ApiService) {}

  public ngOnInit(): void {
    this.getUsers();
  }

  public getUsers() {
    this.apiService.users()
      .subscribe(
        data => this.users = data,
        error => console.log('f*ck...', error)
      );
  }
}
/*
 $ http :8080/api/users
 HTTP/1.1 200
 Content-Type: application/json;charset=UTF-8
 Date: Thu, 08 Sep 2016 22:22:37 GMT
 Transfer-Encoding: chunked
 X-Application-Context: application

 {
   "_embedded": {
     "users": [
       ...
     ]
   },
   "_links": {
       ...
     }
   },
   ...
 }
*/
