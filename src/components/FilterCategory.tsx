import { RestaurantType } from '../types/RestaurantType';

import selcectCategories from '../utils/selectCategories';

type FilterCategoryProps = {
  restaurants: RestaurantType[];
  setSelectCategory: (value: string) => void;
};

export default function FilterCategory({
  restaurants,
  setSelectCategory,
}: FilterCategoryProps) {
  const restaurantsCategories = selcectCategories(restaurants);

  const handleClick = (category: string) => () => {
    setSelectCategory(category);
  };

  return (
    <ul style={{ display: 'flex', padding: '0px', listStyle: 'none' }}>
      {restaurantsCategories.map((restaurantsCategory) => (
        <li key={restaurantsCategory} style={{ marginRight: '1rem' }}>
          <button type="button" onClick={handleClick(restaurantsCategory)}>
            {restaurantsCategory}
          </button>
        </li>
      ))}
    </ul>
  );
}
