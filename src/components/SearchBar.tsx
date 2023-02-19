import Restaurant from '../types/Restaurant';
import ButtonField from './ButtonField';
import TextField from './TextField';

type SearchBarProps = {
  restaurants: Restaurant[];
  filterText: string;
  setFilterText: (value: string) => void;
  setFilterButton: (value: string) => void;
}

export default function SearchBar({
  restaurants,
  filterText,
  setFilterText,
  setFilterButton,
}:
  SearchBarProps) {
  return (
    <div className="search-bar">
      <TextField
        label="검색"
        placeholder="식당 이름"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <ButtonField
        restaurants={restaurants}
        setFilterButton={setFilterButton}
      />
    </div>
  );
}
