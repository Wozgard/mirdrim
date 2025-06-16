import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { CopyServiceService } from '../../services/copy.service';
import { DeviceDetectorService } from '../../services/device-detector.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public enableBurger = true;
  public isTablet = this.deviceService.isTablet();
  public isMobile = this.deviceService.isMobile();

  public burgerOpened = false;

  public phone = '+7 (910) 226-03-19';

  public socialLinksVisible = false;
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

  @HostListener('window:resize')
  onResize() {
    this.deviceService.updateWidth();
    this.isTablet = this.deviceService.isTablet();
    this.isMobile = this.deviceService.isMobile();
  }

  public onPhoneClick(phone: string) {
    this.copyServiceService.copyToClickboard(phone);
  }

  public toggleBurger() {
    this.burgerOpened = !this.burgerOpened;
    this.deviceService.toggleLockScroll();
  }
}
