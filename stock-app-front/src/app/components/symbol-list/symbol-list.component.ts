import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockService } from '../../services/stock.service';
import { Symbol } from '../../models/symbol.model';

@Component({
  selector: 'app-symbol-list',
  templateUrl: './symbol-list.component.html',
  styleUrls: ['./symbol-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SymbolListComponent implements OnInit {
  symbols: Symbol[] = [];
  selectedSymbol: string = '';
  @Output() symbolSelected = new EventEmitter<string>();

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.loadSymbols();
  }

  loadSymbols(): void {
    this.stockService.getSymbols().subscribe(
      data => this.symbols = data
    );
  }

  onSelectSymbol(symbol: string): void {
    this.selectedSymbol = symbol;
    this.symbolSelected.emit(symbol);
  }
}
