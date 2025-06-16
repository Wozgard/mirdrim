import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  prices: number[];
  volume?: string;
  weight?: string;
  addition?: boolean;
  switch?: boolean;
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
          { name: 'Малина-красный базилик', prices: [275] },
          { name: 'Малина-кокос', prices: [275] },
          { name: 'Вареная сгущенка - тыква', prices: [275] },
          { name: 'Вишнёвая панакота', prices: [275] },
          { name: 'Лимонный тарт с меренгой', prices: [275] },
          { name: 'Арахисовая халва', prices: [275] },
          { name: 'Солёный крекер', prices: [275] },
          { name: 'Сырный', prices: [275] },
          { name: 'Банановое мороженое с солёной карамелью', prices: [275] },
          { name: 'Классический', prices: [250] },
          { name: 'Ванильный', prices: [250] },
          { name: 'Карамельный (солёная)', prices: [250] },
          { name: 'Лавандовый', prices: [250] },
          { name: 'Ягодный (виншня/еживика)', prices: [250] },
          { name: 'Фисташковый', prices: [250] },
        ],
      },
    ],
    [
      {
        title: 'Кофе',
        items: [
          { name: 'Эспрессо', prices: [150], volume: '36мл' },
          { name: 'Американо', prices: [160], volume: '180мл' },
        ],
      },
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
          { name: 'Чай в пакетиках', prices: [50] },
          {
            name: 'Мята / Лаванда',
            prices: [20],
            weight: '5г',
            addition: true,
            switch: true,
          },
        ],
      },
      {
        title: 'Сэндвич',
        items: [
          { name: 'Диетический', prices: [200], weight: '115г' },
          { name: 'Сырный', prices: [130], weight: '100г' },
          { name: 'Классический', prices: [150], weight: '100г' },
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
          { name: 'Айс Американо', prices: [180] },
          { name: 'Айс Раф', prices: [260] },
          { name: 'Эспрессо-тоник', prices: [200] },
          { name: 'Бамбл (вишня / апельсин)', prices: [250] },
        ],
      },
      {
        title: 'С молоком',
        volume: ['250мл', '350мл'],
        items: [
          { name: 'Капучино', prices: [170, 200] },
          { name: 'Латте', prices: [-1, 200] },
          { name: 'Флет Уайт', prices: [200, -1] },
          { name: 'Кофе по Венски', prices: [200, 220] },
          { name: 'Латте Макиато', prices: [-1, 210] },
          { name: 'Мокко', prices: [220, 250] },
          { name: 'Не молоко', prices: [35, 50], addition: true },
        ],
      },
      {
        title: 'Дополнительно',
        volume: ['250мл', '350мл'],
        items: [
          { name: 'Какао', prices: [130, 150] },
          { name: 'Тёмный шоколад', prices: [150, 170] },
          { name: 'Матча латте', prices: [200, 240] },
        ],
      },
    ],
  ];
}
