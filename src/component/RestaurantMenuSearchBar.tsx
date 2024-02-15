import RestaurantMenuSearchTextField from './RestaurantMenuSearchTextField';

export default function RestaurantMenuSearchBar() {
  return (
    <>
      <div className='restaurant-menu-search-bar'>
        <RestaurantMenuSearchTextField />
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
