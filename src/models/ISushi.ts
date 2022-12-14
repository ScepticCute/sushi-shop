export interface ISushi {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  category: number[];
  count?: number; // Выполняет функцию подсчёта пицц определенной категории в корзине в виду отсутствия аналогичного функционала бэкенда в mockapi.
}
