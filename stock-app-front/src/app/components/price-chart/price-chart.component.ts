import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockService } from '../../services/stock.service';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-price-chart',
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PriceChartComponent implements OnChanges {
  @Input() symbol: string = '';
  chart: any;

  constructor(private stockService: StockService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['symbol'] && this.symbol) {
      this.loadChart();
    }
  }

  // obtencion y creacion del grafico
  loadChart(): void {
    this.stockService.getHistorical(this.symbol).subscribe(data => {
      const dates = data.historical.map(item => item.date);
      const prices = data.historical.map(item => item.close);

      if (this.chart) {
        this.chart.destroy();
      }

      const ctx = document.getElementById('priceChart') as HTMLCanvasElement;
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: dates,
          datasets: [{
            label: `${this.symbol} Price`,
            data: prices,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    });
  }
}
