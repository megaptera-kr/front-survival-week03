import TextField from './TextField';
import Button from './Button';

interface SearchBarProps {
    filterText: string;
    setFilterText: (value: string) => void;
    onClickMenuButton: (value: string) => void;
}

function SearchBar({
  filterText, setFilterText, onClickMenuButton,
}: SearchBarProps) {
  return (
    <>
      <TextField
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <Button
        onClickMenuButton={onClickMenuButton}
      />
    </>
  );
}

export default SearchBar;
