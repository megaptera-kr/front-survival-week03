import { useState } from 'react';
import SearchBar from '../molecules/SearchBar';
import RestaurantTable from './RestaurantTable';
import { restaurants } from '../../../restaurants.json';
import { SearchFoodCategory } from '../../types';
import filterRestaurants, { selectCategories } from '../../utils/util';
import { Restaurant } from '../../models/Restaurant';

export default function FilterableRestaurantTable() {
  const data = restaurants as Restaurant[];
  const [filteredText, setFilteredText] = useState<string>('');
  const [filteredCategory, setFilteredCategory] = useState<SearchFoodCategory>('전체');
  const selectedCategories = selectCategories(data);
  const filteredRestaurant = filterRestaurants(data, { filteredText, filteredCategory });

  return (
    <main>
      <SearchBar
        text={filteredText}
        categories={selectedCategories}
        setText={setFilteredText}
        setCategory={setFilteredCategory}
      />
      <br />
      <RestaurantTable restaurants={filteredRestaurant} />
    </main>
  );
}
