import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponent } from './my-component/my-component';
import { User } from './user/user';
import { Product } from './product/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyComponent, User, Product],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Vishal Kumar Singh';
}
