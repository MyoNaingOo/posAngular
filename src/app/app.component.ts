import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyNavComponent } from './component/my-nav/my-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pos';
}
