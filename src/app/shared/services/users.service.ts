import { Injectable } from '@angular/core';

export interface IUser {
  id: number;
  firstname: string;
  lastname: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public users: IUser[];

  constructor() {
    this.users = [
      {
        id: 0,
        firstname: 'Joe',
        lastname: 'Dupond',
      },
      {
        id: 1,
        firstname: 'Toto',
        lastname: 'Tata',
      },
    ];
  }
}
