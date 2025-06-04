import { Component } from '@angular/core';
import { HeaderComponent } from '../../modules/header/header.component';
import { PreviewComponent } from '../../modules/preview/preview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, PreviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
