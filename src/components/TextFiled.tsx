import { FilterTextState } from '../types/types';

type TextFiledProps = {
  placeholder: string;
} & FilterTextState;

export default function TextFiled({ placeholder, filterText, setFilterText }:TextFiledProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilterText(value);
  };
  return (
    <>
      <label htmlFor="search-input" style={{ paddingRight: '1rem' }}>검색</label>
      <input
        id="search-input"
        type="text"
        placeholder={placeholder}
        value={filterText}
        onChange={handleChange}
      />
    </>
  );
}
