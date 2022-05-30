import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-side-nav-farm>
      <router-outlet></router-outlet>
  </app-side-nav-farm>
  `
})
export class AppComponent {
  title = 'front-aegro';
}
