import { Component, OnInit, Inject } from '@angular/core';
import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css'],
  providers: [UsersService], // Surcharge ici !
})
export class GrandChildComponent implements OnInit {
  constructor(public usersService: UsersService, @Inject('date') dateService) {
    console.log(dateService().format('DD MM YYYY'));
  }

  ngOnInit() {}
}
