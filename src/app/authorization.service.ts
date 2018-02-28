import {EventEmitter, Injectable, Output} from '@angular/core';
import {User} from "./user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthorizationService {

  @Output() user: EventEmitter<User> = new EventEmitter<User>();

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>('http://localhost:9996/api/user');
  }

}
