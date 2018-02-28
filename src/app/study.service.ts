import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from './user';
import {Study} from './study';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class StudyService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:9996/api/users');
  }

  getUser(): Observable<User> {
    return this.http.get<User>('http://localhost:9996/api/user');
  }

  getStudies(): Observable<Study[]> {
    return this.http.get<Study[]>('http://localhost:9996/api/study');
  }

  saveStudy(study: Study): Observable<Study> {
    return this.http.post<Study>('http://localhost:9996/api/study', study, httpOptions);
  }

}
