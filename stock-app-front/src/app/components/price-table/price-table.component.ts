import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockService } from '../../services/stock.service';
import { Historical } from '../../models/symbol.model';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PriceTableComponent implements OnChanges {
  @Input() symbol: string = '';
  prices: Historical[] = [];

  constructor(private stockService: StockService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['symbol'] && this.symbol) {
      this.loadPrices();
    }
  }

  loadPrices(): void {
    this.stockService.getHistorical(this.symbol).subscribe(
      data => this.prices = data.historical
    );
  }
}
