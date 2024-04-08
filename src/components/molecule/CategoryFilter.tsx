import { MouseEvent } from 'react';
import { Category } from '../../types/Category';
import { Restaurant } from '../../types/Restaurant';
import getCategoriesFromRestaurant from '../../utils/getCategoriesFromRestaurant';

type CategoryFilterProps = {
  restaurants:Restaurant[]
  currentCategory:Category;
  setCurrentCategory:(id:Category) => void
}

export default function CategoryFilter({
  restaurants,
  currentCategory,
  setCurrentCategory,
}: CategoryFilterProps) {
  const categories = getCategoriesFromRestaurant(restaurants);

  const handleClickCategory = (event:MouseEvent<HTMLButtonElement>) => {
    setCurrentCategory(event.currentTarget.id as Category);
  };
  return (
    <ul style={{ display: 'flex', padding: 0 }}>
      {categories.map((category) => (
        <button
          key={category}
          id={category}
          type="button"
          style={{
            marginRight: '1rem',
            color: currentCategory === category ? 'red' : '',
          }}
          onClick={handleClickCategory}
        >
          {category}
        </button>
      ))}
    </ul>
  );
}
