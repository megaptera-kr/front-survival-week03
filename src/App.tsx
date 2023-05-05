import Restaurant from './type/Restaurant';
import restaurantDate from '../restaurants.json';

import SearchBar from './components/SearchBar';
import RestaurantTable from './components/RestaurantTable';

const restaurants: Restaurant[] = restaurantDate.restaurants;

export default function App() {
	return (
		<>
			<h1>오늘의 메뉴</h1>
			<SearchBar />
			<RestaurantTable restaurants={restaurants}/>
		</>
	);
}
