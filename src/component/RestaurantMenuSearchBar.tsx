export default function RestaurantMenuSearchBar() {
  return (
    <>
      <div className='restaurant-menu-search-bar'>
        <label htmlFor='input-menu-search'>검색</label>
        <input type='text' id='input-menu-search' placeholder='식당 이름' />
      </div>
      <div>
        <button type='button'>전체</button>
        <button type='button'>중식</button>
        <button type='button'>한식</button>
        <button type='button'>일식</button>
      </div>
    </>
  );
}
