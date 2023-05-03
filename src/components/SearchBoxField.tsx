import { ChangeEvent } from 'react';

type SearchBoxFieldProps = {
  filterText: string,
  setFilterText: (value: string) => void
}

export default function SearchBoxField({ filterText, setFilterText }: SearchBoxFieldProps) {
  const handleFilterText = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  return (
    <div>
      <label htmlFor="searchbox">검색</label>
      <span>
        <input id="searchbox" type="text" placeholder="search..." value={filterText} onChange={handleFilterText} />
      </span>
    </div>
  );
}
