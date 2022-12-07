import { Component, VERSION } from '@angular/core';
import { UsersService } from './shared/services/users.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(public usersService: UsersService) {}
}
