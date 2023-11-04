import { useState, useEffect } from 'react';
import data from '../restaurants.json';
import SearchBar from './components/searchBar';
import Categories from './components/categories';
import RestaurantTable from './components/restaurantTable';

import type { Restaurant } from './types/Restaurant';

export default function App() {
  const { restaurants } = data;
  const [searchValue, setSearchValue] = useState('');
  const [category, setCategory] = useState('전체');
  const categories = restaurants.reduce((acc: string[], cur: Restaurant) => (
    acc?.includes(cur.category) ? acc : [...acc, cur.category]), ['전체']);
  const [products, setProducts] = useState(restaurants);

  useEffect(() => {
    if (searchValue) {
      const newList = restaurants.filter((el) => el.name.includes(searchValue));
      setProducts(newList);
    } else setProducts(restaurants);
  }, [searchValue]);

  useEffect(() => {
    if (category !== '전체') {
      const newList = restaurants.filter((el) => el.category === category);
      setProducts(newList);
    } else setProducts(restaurants);
  }, [category]);
  return (
    <div className="filterable-product-table">
      <h1>오늘의 메뉴</h1>
      <SearchBar label="검색" placeholder="식당 이름" setSearchValue={setSearchValue} />
      <Categories categories={categories} setCategory={setCategory} />
      <RestaurantTable products={products} />
    </div>
  );
}
