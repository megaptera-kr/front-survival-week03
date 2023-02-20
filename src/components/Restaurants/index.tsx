import Table from '../common/Table';
import RestaurantCategory from './RestaurantCategory';
import RestaurantListView from './RestaurantListView';
import { RestaurantsTable } from '../../types/filterableRestaurant';

const RestaurantCategories = ['식당 이름', '종류', '메뉴'];

function Restaurants({ restaurants }: {
  restaurants: RestaurantsTable[]
}) {
  return (
    <Table>
      <Table.Header header={<RestaurantCategory categories={RestaurantCategories} />} />
      {
        restaurants.map((restaurant) => (
          <Table.Row
            key={restaurant.id}
            row={<RestaurantListView restaurant={restaurant} />}
          />
        ))
      }
    </Table>

  );
}

export default Restaurants;
