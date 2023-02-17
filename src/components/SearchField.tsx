import SearchBar from './SearchBar';
import FilterButton from './FilterButton';

import makeCategories from '../utils/makeCategories';

import Restaurant from '../types/Restaurant';

type SearchFieldProps = {
  filterText: string;
  setFilterText: (text: string) => void;
  setFilterCategory: (text: string) => void;
  restaurants: Restaurant[];
}

export default function SearchField({
  filterText, setFilterText, setFilterCategory, restaurants,
}: SearchFieldProps) {
  const categories = makeCategories(restaurants);

  return (
    <div>
      <SearchBar
        placeholder="식당 이름"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      {categories.map((category) => (
        <FilterButton
          key={category}
          category={category}
          setFilterCategory={setFilterCategory}
        />
      ))}
    </div>
  );
}
