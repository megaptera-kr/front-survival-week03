import { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface SearchProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

function Search({ value, setValue }: SearchProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <label>
      검색
      <input type="text" value={value} onChange={handleChange} />
    </label>
  );
}

export default Search;
