import Table from '../table/Table';
import type { Restaurant, RestaurantFilter, RestaurantTableColumns } from '../../types/restaurants';
import { restaurants } from '../../../restaurants.json';
import { Columns } from '../../types/table';
import { filterRestaurant } from '../../utils/filter';

interface RestaurantTableProps {
  filter: RestaurantFilter
}

export default function ResturantTable({ filter }: RestaurantTableProps) {
  const columns: Columns<RestaurantTableColumns> = [
    { key: 'name', label: '식당이름' },
    { key: 'category', label: '종류' },
    { key: 'menu', label: '메뉴' },
  ];
  const filteredData = filterRestaurant(restaurants, filter);

  const renderColumn = (data: Restaurant, key: RestaurantTableColumns) => {
    switch (key) {
    case 'category':
    case 'name':
      return data[key];

    case 'menu': return (
      <ul>
        {data[key].map((food) => (
          <li key={food.id}>
            {food.name}
            (
            {food.price}
            )
            원
          </li>
        ))}
      </ul>
    );

    default: {
      const exhaustiveCheck: never = key;
      throw new Error(`unknown column key: ${exhaustiveCheck}`);
    }
    }
  };

  return (
    <Table columns={columns} title="식당 목록">
      <>
        {filteredData.map((restaurant) => (
          <Table.Row key={restaurant.id}>
            {columns.map(({ key }) => (
              <Table.Cell key={key}>{renderColumn(restaurant, key)}</Table.Cell>
            ))}
          </Table.Row>
        ))}
      </>
    </Table>
  );
}
