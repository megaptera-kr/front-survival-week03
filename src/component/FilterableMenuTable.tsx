import RestaurantTable from './RestaurantTable';

import Restaurant from '../types/RestaurantType';

type FiterableMenuTableProps = {
  restaurants: Restaurant[];
};

export default function FilterableMenuTable({
  restaurants,
}: FiterableMenuTableProps) {
  return (
    <>
      <div className='filtered-menu-container'>
        <div>오늘의 메뉴</div>
        <div>
          <label htmlFor='input-menu-search'>검색</label>
          <input type='text' id='input-menu-search' placeholder='식당 이름' />
        </div>
        <div>
          <button type='button'>전체</button>
          <button type='button'>중식</button>
          <button type='button'>한식</button>
          <button type='button'>일식</button>
        </div>
        <RestaurantTable restaurants={restaurants} />
      </div>
    </>
  );
}
