import { useCallback, useState } from 'react';

import debounce from '../utils/debounce';

type Props = {
    label?: string;
    onChange?: (value: string) => void;
}

function SearchInput({ label, onChange }: Props) {
  const [innerValue, setInnerValue] = useState('');

  const debouncedChange = useCallback(debounce<string>((value: string) => {
    onChange?.(value);
  }, 300), [onChange]);

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setInnerValue(value);

    debouncedChange(value);
  };

  return (
    <label style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    }}
    >
      {label}
      <input type="text" value={innerValue} onChange={handleChange} />
    </label>
  );
}

export default SearchInput;
