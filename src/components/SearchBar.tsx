import TextField from './TextField';
import Button from './Button';

interface SearchBarProps {
    filterText: string;
    setFilterText: (value: string) => void;
    filterCategory: string;
    setFilterCategory: (value: string) => void;
}

function SearchBar({
  filterText, setFilterText, filterCategory, setFilterCategory,
}: SearchBarProps) {
  return (
    <>
      <TextField
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <Button
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
    </>
  );
}

export default SearchBar;
