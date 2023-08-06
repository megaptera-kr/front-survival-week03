import { useState } from 'react';
import { restaurantData, categoryData } from '../restaurants.json';
import Restaurants from './components/Restaurants';
import CategoryGroup from './components/CategoryGroup';
import SearchBar from './components/SearchBar';

export default function App() {
  const [filterText, setFilterText] = useState<string>('');
  const [category, setCategory] = useState<string>('전체');

  const filteredRestaurants = restaurantData.filter((item) => {
    const isCategoryMatch = category === '전체' || item.category === category;
    const isNameMatch = item.name.includes(filterText.trim());

    return isCategoryMatch && isNameMatch;
  });

  return (
    <>
      <h1>오늘의 메뉴</h1>
      <SearchBar setFilterText={setFilterText} />
      <CategoryGroup categories={categoryData} setCategory={setCategory} />
      <table>
        <thead>
          <tr>
            <th>식당 이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          <Restaurants restaurants={filteredRestaurants} />
        </tbody>
      </table>
    </>
  );
}
