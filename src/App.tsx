import { useState } from 'react';
import Restaurants from '../restaurants.json';
import Category from './components/Category';
import MenuTable from './components/MenuTable';
import SearchBer from './components/SearchBer';

export default function App() {
  const [restaurants] = useState(Restaurants.restaurants);
  const [searchBer, setSearchBer] = useState<string>('');
  const [category, setCategory] = useState('전체');

  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <SearchBer restaurantName={searchBer} setSearchBer={setSearchBer} />
      <Category restaurants={restaurants} setCategory={setCategory} />
      <MenuTable
        restaurants={restaurants}
        restaurantName={searchBer}
        category={category}
      />
    </div>
  );
}
