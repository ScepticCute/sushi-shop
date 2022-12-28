import { useAppSelector } from './redux';

export const useHowManyItemsInCart = (): number => {
  const sushi = useAppSelector((state) => state.cart.sushi);
  let summarySushi: number = 0;
  sushi.forEach((el) => {
    if (el.count === undefined) {
      summarySushi += 1;
    } else summarySushi += el.count + 1;
  });
  return summarySushi;
};
