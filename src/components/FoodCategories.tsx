import { Restaurants, Filter, FoodCategoryWithAll } from '../types';

interface FoodCategoriesProps {
  handleClickCategory: (category: FoodCategoryWithAll) => void;
  filter: Filter;
  restaurants: Restaurants
}

export default function FoodCategories({
  handleClickCategory,
  filter, restaurants,
}: FoodCategoriesProps) {
  const foodCategories = restaurants.reduce<FoodCategoryWithAll[]>(
    (acc, cur) => {
      if (!acc.includes(cur.category)) {
        acc.push(cur.category);
      }
      return acc;
    }
    , ['전체'],
  );

  return (
    <ul style={{
      display: 'flex', gap: '1rem', listStyle: 'none', padding: '0',
    }}
    >
      {foodCategories.map((category) => (
        <li key={category}>
          <button type="button" key={category} style={{ backgroundColor: filter.category === category ? 'gray' : undefined }} onClick={() => handleClickCategory(category)}>{category}</button>
        </li>
      ))}
    </ul>
  );
}
