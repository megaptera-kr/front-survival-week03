import { useState } from 'react';
import Search from './Search';
import RestaurantMenuTable from './RestaurantMenuTable';
import Restaurant from '../types/Restaurant';
import filter from '../util/filter';
import selectedCategory from '../util/select';

type FitleredRestaurantsProps = {
  restaurants: Restaurant[];
}

export default function FitleredRestaurants({ restaurants }: FitleredRestaurantsProps) {
  const [valueText, setValueText] = useState<string>('');
  const [selectCategory, setSelectCategory] = useState<string>('전체');

  const categories = selectedCategory(restaurants);

  const filteredRestaurants = filter(restaurants, {
    valueText, selectCategory,
  });
  return (
    <div>
      {/* contents 컴포넌트 분리 */}
      <Search
        valueText={valueText}
        setValueText={setValueText}
        categories={categories}
        setSelectCategory={setSelectCategory}
      />
      <RestaurantMenuTable restaurants={filteredRestaurants} />
    </div>
  );
}
