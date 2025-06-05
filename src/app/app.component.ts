import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <ng-container>
      <router-outlet></router-outlet>
      <div id="copy" class="copy-message">Скопировано!</div>
    </ng-container>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {}
