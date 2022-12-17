export type sortType = {
  name: 'популярность' | 'название' | 'цена';
  sort: 'rating' | 'title' | 'price';
};

export interface IFilter {
  limit?: number;
  sort?: sortType;
  order?: 'desc' | 'asc';
  page?: number;
  category?: string;
}
