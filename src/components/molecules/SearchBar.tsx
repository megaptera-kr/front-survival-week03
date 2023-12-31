import { Dispatch, SetStateAction } from 'react';
import { SearchFoodCategory } from '../../types';
import TextField from '../atoms/TextField';

interface Props {
    text: string;
    categories: SearchFoodCategory[];
    setText: Dispatch<SetStateAction<string>>;
    setCategory: Dispatch<SetStateAction<SearchFoodCategory>>;
}

function SearchBar({
  text, categories, setText, setCategory,
}: Props) {
  const searchCategories: SearchFoodCategory[] = ['전체', ...categories];
  return (
    <form>
      <TextField label="검색" text={text} setText={setText} />
      <ul style={{
        display: 'flex',
        justifyContent: 'flex-start',
        padding: 0,
        listStyle: 'none',
        gap: '8px',
      }}
      >
        {searchCategories.map((category) => (
          <li key={category}>
            <button type="button" onClick={() => setCategory(category)}>{category}</button>
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SearchBar;
