import { useState } from 'react';
import RestaurantsTable from './components/RestaurantsTable';
import SearchBar from './components/SearchBar';
import data from '../restaurants.json';
import SearchCategory from './components/SearchCategory';
import { Category } from './types/type';

export default function App() {
  const [restaurants, setRestaurants] = useState(data.restaurants);

  const [categories, setCategories] = useState<Category[]>([
    { id: '1', name: '전체', selected: true },
    { id: '2', name: '중식', selected: false },
    { id: '3', name: '한식', selected: false },
    { id: '4', name: '일식', selected: false },
  ]);

  const [filterText, setFilterText] = useState(restaurants);

  const [searchText, setSearchText] = useState('');

  const onToggleCategory = (categoryName: string) => {
    const newCategories = categories.map((category) => ({
      ...category,
      selected: category.name === categoryName,
    }));
    setCategories(newCategories);

    const newFilterText = restaurants.filter((restaurant) => (
      categoryName === '전체'
        ? restaurant.name.includes(searchText)
        : restaurant.category.includes(categoryName) && restaurant.name.includes(searchText)));
    setFilterText(newFilterText);
  };

  const onFilterTextChange = (text: string) => {
    setSearchText(text);
    const selectedCategory = categories.filter((category) => category.selected);
    const categoryName = selectedCategory[0].name;
    const newFilterText = categoryName === '전체'
      ? (restaurants.filter((restaurant) => restaurant.name.includes(text)))
      : (restaurants.filter((restaurant) => restaurant.name.includes(text)
      && restaurant.category.includes(categoryName)));
    setFilterText(newFilterText);
  };

  return (
    <div>
      <div>
        <h1>오늘의 메뉴</h1>
      </div>
      <SearchBar onFilterTextChange={onFilterTextChange} />
      <SearchCategory
        categories={categories}
        onToggleCategory={onToggleCategory}
      />
      <RestaurantsTable filterText={filterText} />
    </div>
  );
}
