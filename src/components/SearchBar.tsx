import TextField from './TextField';
import Buttons from './Buttons';

type SearchBarProps = {
  query: string;
  setQuery: (value: string) => void;
  foodType: string;
  setFoodType: (value: string) => void;
}

function SearchBar({
  query, setQuery, foodType, setFoodType,
}: SearchBarProps) {
  return (
    <>
      <TextField {...{ query, setQuery }} />
      <Buttons {...{ foodType, setFoodType }} />
    </>
  );
}

export default SearchBar;
