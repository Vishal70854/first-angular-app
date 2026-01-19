import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponent } from './my-component/my-component';
import { User } from './user/user';
import { Product } from './product/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyComponent, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Vishal Kumar Singh';

  message: any = "my message";
}
