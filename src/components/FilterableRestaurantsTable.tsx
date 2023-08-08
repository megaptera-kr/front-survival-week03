import { useState } from 'react';
import RestaurantsTable from './RestaurantsTable';

import { restaurants } from '../../restaurants.json';
import SearchBar from './SearchBar';
import selectCategories from '../utils/selectCategories';
import filterRestaurants from '../utils/filterRestaurants';

export default function FilterableRestaurantsTable() {
  const categories = selectCategories(restaurants);
  const [searchText, setSearchText] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>();

  const handleClickCategory = (category: string) => {
    if (category === selectedCategory) {
      return;
    }

    setSelectedCategory(category);
  };

  const filteredRestaurants = filterRestaurants(restaurants, {
    searchText,
    selectedCategory,
  });

  return (
    <>
      <SearchBar
        searchText={searchText}
        categories={categories}
        setSearchText={setSearchText}
        handleClickCategory={handleClickCategory}
      />
      <RestaurantsTable restaurants={filteredRestaurants} />
    </>
  );
}
