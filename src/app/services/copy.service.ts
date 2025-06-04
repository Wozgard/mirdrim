import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CopyServiceService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  public copyToClickboard(text: string) {
    if (!isPlatformBrowser(this.platformId)) return;

    navigator.clipboard.writeText(text);
    const message = document.getElementById('copy');
    message?.classList.add('copy-message--visible');
    setTimeout(() => {
      message?.classList.remove('copy-message--visible');
    }, 2000);
  }
}
