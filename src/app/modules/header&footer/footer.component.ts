import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CopyServiceService } from '../../services/copy.service';
import { DeviceDetectorService } from '../../services/device-detector.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class FooterComponent {
  public enableBurger = false;
  public isTablet = this.deviceService.isTablet();
  public isMobile = this.deviceService.isMobile();

  public burgerOpened = false;

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
      link: '/#prices',
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

  constructor(
    private readonly copyServiceService: CopyServiceService,
    private readonly deviceService: DeviceDetectorService
  ) {}

  public onPhoneClick(phone: string) {
    this.copyServiceService.copyToClickboard(phone);
  }
  public toggleBurger() {
    this.burgerOpened = !this.burgerOpened;
  }
}
