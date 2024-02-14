import RestaurantMenuTableTitle from './RestaurantMenuTableTitle';
import RestaurantMenuSearchBar from './RestaurantMenuSearchBar';
import RestaurantTable from './RestaurantTable';

import Restaurant from '../types/RestaurantType';

type FiterableMenuTableProps = {
  restaurants: Restaurant[];
};

export default function FilterableRestaurantMenuTable({
  restaurants,
}: FiterableMenuTableProps) {
  const MENU_TABLE_TITLE = '오늘의 메뉴';

  return (
    <>
      <div className='filtered-menu-container'>
        <RestaurantMenuTableTitle title={MENU_TABLE_TITLE} />
        <RestaurantMenuSearchBar />
        <RestaurantTable restaurants={restaurants} />
      </div>
    </>
  );
}
