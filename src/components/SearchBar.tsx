import TextField from './TextField';
import Button from './Button';

interface SearchBarProps {
    filterText: string;
    setFilterText: (value: string) => void;
    filterMenu: any;
    setFilterMenu: (value: any) => void;
}

function SearchBar({
  filterText, setFilterText, filterMenu, setFilterMenu,
}: SearchBarProps) {
  return (
    <>
      <TextField
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <Button
        filterMenu={filterMenu}
        setFilterMenu={setFilterMenu}
      />
    </>
  );
}

export default SearchBar;
