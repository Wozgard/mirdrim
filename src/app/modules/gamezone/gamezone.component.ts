import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gamezone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gamezone.component.html',
  styleUrl: './gamezone.component.scss',
})
export class GamezoneComponent {
  public cardList = [
    {
      img: 'assets/img/gamezone/vr.png',
      title: 'Приставка и VR',
      description: 'Есть 2 геймпада и VR-шлема, одиночные и кооперативные игры',
    },
    {
      img: 'assets/img/gamezone/tables.png',
      title: 'Столы для настолок',
      description: 'Для больших компаний, с атмосферной подсветкой',
    },
    {
      img: 'assets/img/gamezone/vip.png',
      title: 'Отдельная комната',
      description:
        'Для масштабных игровых сессий, и когда хочется чтобы никто не мешал',
    },
  ];
}
