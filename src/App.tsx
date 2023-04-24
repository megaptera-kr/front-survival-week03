import {
  ChangeEventHandler, useState,
} from 'react';
import SearchBar from './components/SearchBar';
import RestaurantCategoryFilter from './components/RestaurantCategoryFilter';
import RestaurantList from './components/RestaurantList';
import './styles/App.css';
import restaurantsData from '../restaurants.json';
import { Restaurant, RestaurantCategory } from './types/app';

type SearchOptions = {
  name: string
  category: RestaurantCategory
}

export default function App() {
  const allRestaurants = restaurantsData.restaurants;
  const [restaurants, setRestaurants] = useState<Restaurant[]>(allRestaurants);
  const [searchOptions, setSearchOptions] = useState<SearchOptions>({
    name: '',
    category: '전체',
  });

  const getFilteredRestaurants = (newSearchOptions: SearchOptions) => {
    const { name, category } = newSearchOptions;

    if (!name && category === '전체') {
      return allRestaurants;
    }

    return allRestaurants.filter((restaurant) => {
      const isNameMatched = !name.trim() || restaurant.name.includes(name);
      const isCategoryMatched = category === '전체' || restaurant.category === category;

      return isNameMatched && isCategoryMatched;
    });
  };

  const handleChangeRestaurants: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value: name } = e.target;
    const newSearchOptions = { ...searchOptions, name };
    const newRestaurants = getFilteredRestaurants(newSearchOptions);

    setSearchOptions(newSearchOptions);
    setRestaurants(newRestaurants);
  };

  const handleSelectRestaurants = (category: RestaurantCategory) => {
    const newSearchOptions = { ...searchOptions, category };
    const newRestaurants = getFilteredRestaurants(newSearchOptions);

    setSearchOptions(newSearchOptions);
    setRestaurants(newRestaurants);
  };

  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <SearchBar onChange={handleChangeRestaurants} />
      <RestaurantCategoryFilter onSelect={handleSelectRestaurants} />
      <RestaurantList restaurants={restaurants} />
    </div>
  );
}
