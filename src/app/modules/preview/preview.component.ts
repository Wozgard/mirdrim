import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss',
})
export class PreviewComponent {
  public links = {
    vk: 'https://vk.com/mirdrim',
    tg: 'https://t.me/World_and_DreaM',
  };

  public featureList = [
    { name: 'Чай и кофе', exist: true },
    { name: 'Настольные игры', exist: true },
    { name: 'Игровая приставка', exist: true },
    { name: 'Виртуальная реальность', exist: true },
    { name: 'Мастер-классы', exist: true },
  ];
}
