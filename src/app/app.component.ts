import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-side-nav>
      <router-outlet></router-outlet>
  </app-side-nav>
  `
})
export class AppComponent {
  title = 'front-aegro';
}
