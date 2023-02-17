import SelectField from './SelectField';

type SearchBarProps = {
  setCategory: (value:string) => void
  filterText: string;
  setFilterText: (value:string) => void
  selectCategories: string[]
}

export default function SearchBar({
  setCategory, filterText, setFilterText, selectCategories,
} : SearchBarProps) {
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilterText(value);
  };
  return (
    <div className="search-bar">
      <label htmlFor="input-search" style={{ marginRight: '10px' }}>검색</label>
      <input
        placeholder="식당 이름"
        id="input-search"
        value={filterText}
        onChange={handleChange}
      />
      <SelectField
        selectCategories={selectCategories}
        setCategory={setCategory}
      />
    </div>
  );
}
