import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Symbol, HistoricalData } from '../models/symbol.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiUrl = 'http://localhost:9090/api';

  constructor(private http: HttpClient) { }

  getSymbols(): Observable<Symbol[]> {
    return this.http.get<Symbol[]>(`${this.apiUrl}/symbols`);
  }

  getSymbol(symbol: string): Observable<Symbol> {
    return this.http.get<Symbol>(`${this.apiUrl}/symbols/${symbol}`);
  }

  getHistorical(symbol: string): Observable<HistoricalData> {
    return this.http.get<HistoricalData>(`${this.apiUrl}/historical/${symbol}`);
  }
}
