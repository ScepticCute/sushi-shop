export interface ISushi {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  category: string;
  rating: number;
  price: number;
  count: number; // Выполняет функцию подсчёта суши определенной категории в корзине в виду отсутствия аналогичного функционала в mockapi.
}
