export interface ISushi {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  description: string;
  category: string;
  count?: number[]; // Выполняет функцию подсчёта пицц определенной категории в корзине в виду отсутствия аналогичного функционала в mockapi.
  rating: number;
}
