import CategoryField from './CategoryField';
import TextField from './TextField';

type SearchBarProps = {
  categories: string[];
  filterText: string;
  setFilterText: (value: string) => void;
  filterCategory: string;
  setFilterCategory: (value: string) => void;
};

export default function SearchBar({
  categories,
  filterText,
  setFilterText,
  filterCategory,
  setFilterCategory,
}: SearchBarProps) {
  return (
    <>
      <TextField
        placeholder="식당이름"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <CategoryField
        categories={categories}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
    </>
  );
}
