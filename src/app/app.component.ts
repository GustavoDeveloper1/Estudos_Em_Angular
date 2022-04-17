import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  userData = {
    userName : "Gustavo",
    email :'gustavo@gmail.com',
    roler: 'admin'
  }

  title = 'curso-angular';
}
