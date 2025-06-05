import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PriceBlock } from '../../modules/prices/prices.component';

@Component({
  selector: 'app-prices-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prices-block.component.html',
  styleUrl: './prices-block.component.scss',
})
export class PricesBlockComponent {
  @Input() public title = '';
  @Input() public priceList: PriceBlock[] = [];
  @Input() public dotted = false;
}
