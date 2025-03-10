export interface Symbol {
  symbol: string;
  name: string;
  price: number;
}

export interface Historical {
  date: string;
  close: number;
}

export interface HistoricalData {
  symbol: string;
  historical: Historical[];
}
