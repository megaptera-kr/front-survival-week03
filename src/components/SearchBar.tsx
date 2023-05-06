import MenuBtn from './MenuBtn';
import Search from './Search';

type SearchBarType = {
  filterText: string;
  setFilterText: (value: string) => void,
  categories: string[],
  setFilterCategories: (text: string) => void,
}

export default function SearchBar({
  filterText, setFilterText, categories, setFilterCategories,
}: SearchBarType) {
  return (
    <div className="search-bar">
      <Search placeholder="검색어 입력" filterText={filterText} setFilterText={setFilterText} />
      <MenuBtn categories={categories} setFilterCategories={setFilterCategories} />
    </div>
  );
}
