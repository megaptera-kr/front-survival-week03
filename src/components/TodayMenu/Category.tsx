import { MouseEvent } from 'react';

import type { Restaurant } from '../../types/todayMenu';

type MenuCategoryProps = {
  restaurants: Restaurant[];
  setCategory: (category: string) => void;
};

export default function Category({
  restaurants,
  setCategory,
}: MenuCategoryProps) {
  const menuCategories = restaurants.reduce(
    (acc: string[], restaurant) =>
      acc.includes(restaurant.category) ? acc : [...acc, restaurant.category],
    ['전체'],
  );

  const handleClickCategory = (e: MouseEvent<HTMLButtonElement>) => {
    const { category } = e.currentTarget.dataset;

    if (!category) return;

    setCategory(category);
  };

  return (
    <div>
      {menuCategories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={handleClickCategory}
          data-category={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
