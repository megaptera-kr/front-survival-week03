type searchBarProps = {
  label: string;
  placeholder: string;
  setSearchValue: (e: string) => void
}

export default function SearchBar({ label, placeholder, setSearchValue }:searchBarProps) {
  return (
    <div className="search-bar">
      <label htmlFor="search-input">{label}</label>
      <input type="text" placeholder={placeholder} id="search-input" onChange={(e) => setSearchValue(e.target.value)} />
    </div>
  );
}
