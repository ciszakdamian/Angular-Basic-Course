import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lista zadań';


  get footer(): string {
    return '© Lista zadań,All rights reserved.';
  }

  getDate(): Date {
    return new Date();
  }
}
