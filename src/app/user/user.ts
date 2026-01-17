import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  user = {
    id: 1,
    name: 'Vishal',
    email: 'vishal@gmail.com',
    mobile: 1234567890,
  };
}
