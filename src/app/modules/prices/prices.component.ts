import { Component } from '@angular/core';
import { PricesBlockComponent } from '../../component/prices-block/prices-block.component';
import { CommonModule } from '@angular/common';

export interface PriceBlock {
  title: string;
  description?: string;
}

interface PriceList {
  title: string;
  dotted: boolean;
  priceList: PriceBlock[];
}

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [CommonModule, PricesBlockComponent],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.scss',
})
export class PricesComponent {
  public priceLists: PriceList[] = [
    {
      title: 'Цены',
      dotted: true,
      priceList: [
        {
          title: '250р',
          description: '1й час',
        },
        {
          title: '2 руб/мин',
          description: '2й час',
        },
        {
          title: '2 руб/мин',
          description: '3й час',
        },
        {
          title: '1 руб/мин',
          description: '4й час',
        },
        {
          title: 'Бесплатно',
          description: '5й час',
        },
      ],
    },
    {
      title: 'Стоп-чек',
      dotted: false,
      priceList: [
        {
          title: '',
        },
        {
          title: '',
        },
        {
          title: '500р за весь день',
        },
        {
          title: '',
        },
        {
          title: '',
        },
      ],
    },
  ];
}
