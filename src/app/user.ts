import {UserDetail} from './user-detail';

export class User {
  id: number;
  name: string;
  login: string;
  userDetails: UserDetail[];


  constructor(id: number, name: string, login: string, userDetails: UserDetail[]) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.userDetails = userDetails;
  }
}
