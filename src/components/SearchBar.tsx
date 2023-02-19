import { ChangeEvent } from 'react';
import TextFiledProps from '../types/textfiledProps';

export default function SearchBar({
  filterText, setFilterText,
}: TextFiledProps) {
  const handleFilterText = function handleFlterText(e: ChangeEvent<HTMLInputElement>) {
    // console.log(e.target.value);
    const { value } = e.target;
    setFilterText(value);
  };
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <label
        style={{
          marginRight: '10px',
        }}
      >
        검색
        <input
          type="text"
          placeholder="식당 이름"
          value={filterText}
          onChange={handleFilterText}
        />
      </label>
    </div>
  );
}
