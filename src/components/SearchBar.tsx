export default function SearchBar() {
  return (
    <>
      {/* 눕혀야함 */}
      <div>
        <label htmlFor="restaurant-name">검색</label>
        <input type="search" placeholder="식당 이름" name="resturant-name" />
      </div>
      {/* Category iterate */}
      <ul>
        <li><button type="button">전체</button></li>
        <li><button type="button">중식</button></li>
        <li><button type="button">한식</button></li>
        <li><button type="button">일식</button></li>
      </ul>
    </>
  );
}
