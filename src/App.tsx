// - 1. 사용자는 식당 이름, 종류, 메뉴가 보이는 식당 목록을 볼 수 있다.
// - 2. 사용자는 식당 이름을 입력하여 이름이 (부분)일치하는 식당 목록을 골라 볼 수 있다.
// - 3. 사용자는 식당 종류 버튼을 눌러서 종류가 일치하는 식당 목록만 골라 볼 수 있다.
// - 4.사용자는 입력한 식당 이름과 선택한 종류가 모두 일치하는 식당 목록만 골라 볼 수 있다.
import FilterableRestaurantTable from './components/FilterableRestaurantTableProps';
import data from '../restaurants.json';

export default function App() {
  return (
    <FilterableRestaurantTable restaurants={data.restaurants} />
  );
}
