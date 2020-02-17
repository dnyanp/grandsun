import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grandsolar';

  onActivate(e) {
    console.log(window.scroll);
    window.scroll(0,0);
  }

  gotoTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
