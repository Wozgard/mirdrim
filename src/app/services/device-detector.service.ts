import { HostListener, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class DeviceDetectorService {
  private screenWidth: number | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
    }
  }

  @HostListener('window:resize')
  updateWidth = () => {
    this.screenWidth = window.innerWidth;
  };

  public isTablet(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      // SSR: нельзя определить ширину — вернем безопасное значение
      return false;
    }

    return (this.screenWidth ?? window.innerWidth) < 1230;
  }

  public isMobile(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      // SSR: нельзя определить ширину — вернем безопасное значение
      return false;
    }

    return (this.screenWidth ?? window.innerWidth) < 630;
  }

  public toggleLockScroll() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    if (document.body.style.overflow == 'hidden') {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }
}
