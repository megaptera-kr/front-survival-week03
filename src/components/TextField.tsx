import { type ChangeEvent } from 'react';

type TextFieldProps = {
  placeholder: string;
  filterText: string;
  setFilterText: (value: string) => void;
};

export default function TextField({
  placeholder,
  filterText,
  setFilterText,
}: TextFieldProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };

  return (
    <label>
      <label htmlFor={placeholder} style={{ paddingRight: '1rem' }}>
        검색
      </label>
      <input
        type="text"
        id={placeholder}
        placeholder={placeholder}
        value={filterText}
        onChange={handleChange}
      />
    </label>
  );
}
