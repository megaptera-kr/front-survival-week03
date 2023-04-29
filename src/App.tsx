import { useState } from 'react';
import FilterButton from './components/FilterButton';
import ProductTable from './components/ProductTable';
import SearchBar from './components/SearchBar';
import Title from './components/Title';
import restaurantsList from '../restaurants.json';
import FILTER_LIST from './constants/constants';

export default function App() {
  const { restaurants }: { restaurants: Restaurant[] } = restaurantsList;

  type FilterType = (typeof FILTER_LIST)[number];
  const [filterType, setFilterType] = useState<FilterType>('전체');
  const [keyword, setKeyword] = useState<string>('');

  return (
    <>
      <Title />
      <SearchBar setKeyword={setKeyword} />
      <FilterButton data={FILTER_LIST} setFilterType={setFilterType} />
      <ProductTable
        data={restaurants}
        filterType={filterType}
        keyword={keyword}
      />
    </>
  );
}
