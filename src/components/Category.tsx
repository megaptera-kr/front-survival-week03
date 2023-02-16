import { MouseEvent } from 'react';
import { Restaurant } from '../types/Menu';

type CategoryProps = {
  restaurants: Restaurant[];
  setCategory: (value: string) => void;
}

function Category({ restaurants, setCategory }:CategoryProps) {
  const categorys: string[] = restaurants.reduce(
    (acc, restaurant) => (acc.includes(restaurant.category)
      ? acc
      : [...acc, restaurant.category]),
    ['전체'],
  );

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { category } = e.currentTarget.dataset;

    if (!category) return;

    setCategory(category);
  };
  return (
    <div>
      {categorys.map((category) => (
        <button
          key={category}
          type="button"
          onClick={handleClick}
          data-category={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Category;
