import { useRef } from 'react';

type SearchBarProps = {
  label: string,
  setSearchText: (value: string) => void
}

export default function SearchBar({ label, setSearchText }: SearchBarProps) {
  const id = useRef(`checkbox-${label}`.replace(/ /g, '-').toLocaleLowerCase());
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <label htmlFor={id.current}>검색</label>
      <input
        id={id.current}
        type="text"
        name="searchRestaurant"
        placeholder="식당 이름"
        onChange={handleChange}
      />
    </div>
  );
}
