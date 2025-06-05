import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  prices: number[];
  volume?: string;
  weight?: string;
  addition?: boolean;
}

interface MenuSection {
  title: string;
  volume?: string[];
  items: MenuItem[];
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  public menu: MenuSection[][] = [
    [
      {
        title: 'Раф',
        volume: ['350мл'],
        items: [
          { name: 'Малина-красный базилик', prices: [250] },
          { name: 'Малина-кокос', prices: [250] },
          { name: 'Вишнёвая панакота', prices: [250] },
          { name: 'Лимонный тарт с меренгой', prices: [250] },
          { name: 'Арахисовая халва', prices: [250] },
          { name: 'Солёный крекер', prices: [250] },
          { name: 'Сырный', prices: [250] },
          { name: 'Банановое мороженое с солёной карамелью', prices: [250] },
        ],
      },
      {
        title: 'Кофе',
        items: [
          { name: 'Эспрессо', prices: [140], volume: '36мл' },
          { name: 'Американо', prices: [140], volume: '180мл' },
        ],
      },
      {
        title: 'Дополнительно',
        volume: ['300мл'],
        items: [
          { name: 'Какао', prices: [130] },
          { name: 'Тёмный шоколад', prices: [150] },
          { name: 'Чай в пакетиках', prices: [60] },
        ],
      },
    ],
    [
      {
        title: 'Чай',
        volume: ['500мл'],
        items: [
          { name: 'Юннань Империал', prices: [150] },
          { name: 'Дерзкий Фрукт', prices: [160] },
          { name: 'Ганпаудер', prices: [150] },
          { name: 'Клубника со сливками', prices: [160] },
          { name: 'Улун Молочный', prices: [200] },
          { name: 'Женьшень Улун Выдержанный', prices: [200] },
          { name: 'Каркаде', prices: [120] },
          {
            name: 'Мята / Лаванда',
            prices: [20],
            weight: '5г',
            addition: true,
          },
        ],
      },
      {
        title: 'Сэндвич',
        items: [
          { name: 'Диетический', prices: [200], weight: '115г' },
          { name: 'Сырный', prices: [100], weight: '100г' },
          { name: 'Классический', prices: [120], weight: '100г' },
          { name: 'Песто', prices: [220], weight: '100г' },
          { name: 'Нежный', prices: [220], weight: '110г' },
        ],
      },
    ],
    [
      {
        title: 'Холодные напитки',
        volume: ['300мл'],
        items: [
          { name: 'Гляссе', prices: [220] },
          { name: 'Айс Латте', prices: [220] },
          { name: 'Кофе по вьетнамски', prices: [180] },
          { name: 'Карамельный Макиато', prices: [210] },
          { name: 'Эспрессо-тоник с мятой', prices: [180] },
          { name: 'Бамбл (вишня / апельсин)', prices: [250] },
        ],
      },
      {
        title: 'С молоком',
        volume: ['250мл', '350мл'],
        items: [
          { name: 'Капучино', prices: [160, 190] },
          { name: 'Латте', prices: [-1, 200] },
          { name: 'Флет Уайт', prices: [200, -1] },
          { name: 'Кофе по Венски', prices: [200, 220] },
          { name: 'Латте Макиато', prices: [-1, 210] },
          { name: 'Мокко', prices: [220, 250] },
          { name: 'Не молоко', prices: [35], addition: true },
        ],
      },
    ],
  ];
}
