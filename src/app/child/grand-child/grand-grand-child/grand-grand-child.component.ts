import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../shared/services/users.service';

@Component({
  selector: 'app-grand-grand-child',
  templateUrl: './grand-grand-child.component.html',
  styleUrls: ['./grand-grand-child.component.css'],
})
export class GrandGrandChildComponent implements OnInit {
  constructor(public usersService: UsersService) {}

  ngOnInit() {}
}
