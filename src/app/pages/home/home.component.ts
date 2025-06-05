import { Component } from '@angular/core';
import { HeaderComponent } from '../../modules/header&footer/header.component';
import { PreviewComponent } from '../../modules/preview/preview.component';
import { FooterComponent } from '../../modules/header&footer/footer.component';
import { GamezoneComponent } from '../../modules/gamezone/gamezone.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    PreviewComponent,
    FooterComponent,
    GamezoneComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
