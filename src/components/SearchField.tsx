type SearchBarProps = {
  searchRestaurantText: string;
  setSearchRestaurantText(value: string): void;
}

export default function SearchBar({
  searchRestaurantText, setSearchRestaurantText,
}: SearchBarProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchRestaurantText(event.target.value);
  };
  return (
    <>
      <label
        htmlFor="input-search"
        style={{
          paddingRight: '1rem',
        }}
      >
        검색
      </label>
      <input
        id="input-search"
        type="text"
        placeholder="식당 이름"
        value={searchRestaurantText}
        onChange={handleChange}
      />
    </>
  );
}
