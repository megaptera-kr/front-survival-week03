type SerchInputProps = {
  placeholder: string;
  setSearchText: (value: string) => void;
}

export default function SearchInput({ placeholder, setSearchText }: SerchInputProps) {
  const changeInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="search-form">
      <label htmlFor="searchInput">검색어</label>
      <input type="text" id="searchInput" placeholder={placeholder} onChange={changeInputText} />
    </div>
  );
}
