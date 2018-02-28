import {Component, OnInit} from '@angular/core';
import {User} from "./user";
import {AuthorizationService} from "./authorization.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'Studycatalog';
  user: User;

  constructor(private authorizationService: AuthorizationService) {
  }

  ngOnInit(): void {
    this.authorizationService.getUser().subscribe(function(user) {
      this.user = new user;
      this.authorizationService.user.emit(user);
    }.bind(this));
  }
}
