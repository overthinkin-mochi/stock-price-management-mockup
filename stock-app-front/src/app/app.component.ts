import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SymbolListComponent } from './components/symbol-list/symbol-list.component';
import { PriceTableComponent } from './components/price-table/price-table.component';
import { PriceChartComponent } from './components/price-chart/price-chart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    SymbolListComponent,
    PriceTableComponent,
    PriceChartComponent
  ]
})
export class AppComponent {
  selectedSymbol: string = '';

  onSymbolSelected(symbol: string): void {
    this.selectedSymbol = symbol;
  }
}
