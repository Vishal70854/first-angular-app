import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponent } from './my-component/my-component';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyComponent, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Vishal Kumar Singh';
}
