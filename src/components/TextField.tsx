import { ChangeEvent } from 'react';

interface TextFieldProps {
    filterText: string;
    setFilterText: (value: string) => void;
}

function TextField({ filterText, setFilterText }: TextFieldProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilterText(value);
  };

  return (
    <>
      <label htmlFor="filteredMenu" style={{ marginRight: 15 }}>검색</label>
      <input
        id="filteredMenu"
        placeholder="식당 이름"
        value={filterText}
        onChange={handleChange}
      />
    </>
  );
}

export default TextField;
