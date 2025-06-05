import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CopyServiceService } from '../../services/copy.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class FooterComponent {
  public phone = '+7 (910) 226-03-19';

  public socialLinksVisible = true;
  public socialLinks = {
    vk: 'https://vk.com/mirdrim',
    tg: 'https://t.me/World_and_DreaM',
  };

  public navList = [
    {
      name: 'Игровая зона',
      link: '/#gamezone',
    },
    {
      name: 'Цены',
      link: '/#prises',
    },
    {
      name: 'Меню',
      link: '/#menu',
    },
    {
      name: 'Расположение',
      link: '/#location',
    },
  ];

  constructor(private readonly copyServiceService: CopyServiceService) {}

  public onPhoneClick(phone: string) {
    this.copyServiceService.copyToClickboard(phone);
  }
}
