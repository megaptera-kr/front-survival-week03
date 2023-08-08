import TextField from './TextField';
import CategoriesField from './CategoriesField';

type SearchBarProps = {
  searchText: string;
  categories: string[];
  setSearchText: (value: string) => void;
  handleClickCategory: (category: string) => void;
}

export default function SearchBar({
  searchText,
  categories,
  setSearchText,
  handleClickCategory,
}: SearchBarProps) {
  return (
    <>
      <TextField
        id="search-input"
        label="검색"
        placeholder="식당 이름"
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <CategoriesField
        categories={categories}
        handleClickCategory={handleClickCategory}
      />
    </>
  );
}
