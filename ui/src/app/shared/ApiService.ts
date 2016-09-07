/**
 * Created by mak on 9/9/16.
 */
import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Response, Http, Headers} from '@angular/http';
import {User, Users} from './Users';
import {Observable} from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private http: Http) {}

  public getUsers(): Observable<Response> {
    return this.http.get(Users.uri);
  }

  public users(): Observable<User[]> {
    return this.getUsers()
      .map(res => res.json() || {})
      .map(json => json['_embedded'])
      .map(_embedded => _embedded.users)
      .map(users => users.map(user => Users.of(user.id, user.username)))
      .catch(this.handleError);
  }

  public handleError(error: any) {
    console.log('error', error);
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.log('errMsg', errMsg);
    return Observable.throw(errMsg)
  }
}
