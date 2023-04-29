type SearchBarProps = {
  filterText: string;
  setFilterText: (value:string) => void;
}
export default function SearchBar(
  {
    filterText,
    setFilterText,
  }:SearchBarProps,
) {
  return (
    <div>
      {/* 눕혀야함 */}
      <label htmlFor="restaurant-name">검색 </label>
      <input type="search" placeholder="식당 이름" name="resturant-name" />
    </div>
  );
}
