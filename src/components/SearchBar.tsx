import TextField from './TextField';
import FilterCategory from './FilterCategory';

import { RestaurantType } from '../types/RestaurantType';

type SearchBarProps = {
  restaurants: RestaurantType[];
  searchText: string;
  setSearchText: (value: string) => void;
  setSelectCategory: (value: string) => void;
};

export default function SearchBar({
  restaurants,
  searchText,
  setSearchText,
  setSelectCategory,
}: SearchBarProps) {
  return (
    <div>
      <TextField searchText={searchText} setSearchText={setSearchText} />
      <FilterCategory
        restaurants={restaurants}
        setSelectCategory={setSelectCategory}
      />
    </div>
  );
}
