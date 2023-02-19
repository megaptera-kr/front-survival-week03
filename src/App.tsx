import { useState } from 'react';
import restaurantData from '../restaurants.json';
// import restaurantType from './types/restaurantType';
// import RestaurantTableExam from './exam/RestaurantTableExam';
// import SearchBarExam from './exam/SearchBarExam';
// import filterRestaurants from './exam/filterRestaurants';
import SearchBar from './components/SearchBar';
import CategorySelectBar from './components/CategorySelectBar';
import RestaurantTable from './components/RestaurantTable';

export default function App() {
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('');

  // const filteredRestaurants = filterRestaurants(restaurantData.restaurants, {
  //   filterText, filterCategory,
  // });

  // const categories = ['중식', '한식', '일식'];

  return (
    <p>
      <h1>오늘의 메뉴</h1>
      {/* <SearchBarExam
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      /> */}
      <SearchBar filterText={filterText} setFilterText={setFilterText} />
      <CategorySelectBar setFilterCate={setFilterCategory} />
      <RestaurantTable
        data={restaurantData.restaurants}
        filterText={filterText}
        filterCate={filterCategory}
      />
      {/* <RestaurantTableExam
        restaurants={filteredRestaurants}
      /> */}
    </p>
  );
}
