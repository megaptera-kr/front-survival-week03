import RestaurantMenuSearchTextField from './RestaurantMenuSearchTextField';
import RestaurantMenuSearchButton from './RestaurantMenuSearchButton';

export default function RestaurantMenuSearchBar() {
  return (
    <>
      <div className='restaurant-menu-search-bar'>
        <RestaurantMenuSearchTextField />
      </div>
      <div>
        <RestaurantMenuSearchButton text='전체' />
        <button type='button'>중식</button>
        <button type='button'>한식</button>
        <button type='button'>일식</button>
      </div>
    </>
  );
}
