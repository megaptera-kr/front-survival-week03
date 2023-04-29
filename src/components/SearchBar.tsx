import InputBar from './InputBar';
import SelectCategory from './SelectCategory';

type SearchBarProps = {
  filterText: string;
  setFilterText: (value: string) => void;
  categories: string[];
  filterCategory: string;
  setfilterCategory: (value: string) => void;
}

export default function SearchBar({
  filterText, setFilterText, categories, filterCategory, setfilterCategory,
}: SearchBarProps) {
  return (
    <div className="search-bar">
      <InputBar placeholder="식당 이름" label="검색" filterText={filterText} setFilterText={setFilterText} />
      <SelectCategory
        categories={categories}
        filterCategory={filterCategory}
        setfilterCategory={setfilterCategory}
      />
    </div>
  );
}
