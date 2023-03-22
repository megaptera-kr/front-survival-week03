import { ChangeEventHandler, useState } from 'react';

type SearchBarProps = {
  onChange: ChangeEventHandler<HTMLInputElement>
}
export default function SearchBar({ onChange }: SearchBarProps) {
  const [inputValue, setInputValue] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.currentTarget;
    setInputValue(value);

    onChange(e);
  };

  return (
    <div>
      <label htmlFor="search" style={{ paddingRight: '10px' }}>검색</label>
      <input id="search" type="text" placeholder="식당 이름" value={inputValue} onChange={handleChange} />
    </div>
  );
}
