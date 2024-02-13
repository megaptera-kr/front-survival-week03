import { useRef } from 'react';

type SearchBarProps = {
  label: string
}

function SearchBar({ label }: SearchBarProps) {
  const id = useRef(`input-${label}`.replace(/ /g, '-').toLowerCase());

  return (
    <div>
      <label htmlFor={id.current} style={{ paddingRight: '1rem' }}>
        {label}
      </label>
      <input type="text" id={id.current} placeholder="식당 이름" />
    </div>
  );
}

export default SearchBar;
