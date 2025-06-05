import { AfterViewInit, Component } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare global {
  interface Window {
    ymaps: any;
  }
}

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadMap();
    }
  }

  private loadMap() {
    if (typeof window.ymaps === 'undefined') {
      const script = document.createElement('script');
      script.src =
        'https://api-maps.yandex.ru/2.1/?apikey=ТВОЙ_API_КЛЮЧ&lang=ru_RU';
      script.onload = () => this.initMap();
      document.head.appendChild(script);
    } else {
      window.ymaps.ready(() => this.initMap());
    }
  }

  private initMap(): void {
    window.ymaps.ready(() => {
      const map = new window.ymaps.Map('yandex-map', {
        center: [51.303103, 37.90314],
        zoom: 16,
        controls: ['zoomControl', 'fullscreenControl'],
        suppressMapOpenBlock: false,
      });

      const placemark = new window.ymaps.Placemark(
        [51.303103, 37.90314],
        {
          balloonContentBody: `
            <div style="
              font-family: 'IBM Plex Serif';
              font-size: 14px;
              line-height: 1.4;
              color: #68503d;
            ">
              <strong style="font-family: 'EB Garamond'; font-size: 18px">
                Антикафе «МирДриМ»
              </strong><br />
              <span style="color: #777">мкрн Космос 11А, 1й этаж</span><br />
              <span style="color: #aaa; font-size: 12px">Старый Оскол</span>
            </div>
          `,
        },
        {
          iconLayout: 'default#image',
          iconImageHref: 'assets/img/coffee-icon.svg',
          iconImageSize: [64, 64],
          iconImageOffset: [-32, -64],
        }
      );

      map.geoObjects.add(placemark);
    });
  }
}
