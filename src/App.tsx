import type Restaurant from './type/Restaurant';
import restaurantDate from '../restaurants.json';

import SearchBar from './components/SearchBar';
import RestaurantTable from './components/RestaurantTable';
import {useState} from 'react';

const {restaurants} = restaurantDate;

export default function App() {
	const [btnValue, setBtnValue] = useState<string>('전체');
	const [textValue, setTextValue] = useState<string>('');

	let filteredList = btnValue === '전체' ? restaurants : restaurants.filter(restaurant => restaurant.category === btnValue);
	filteredList = textValue === '' ? filteredList : filteredList.filter(restaurant => restaurant.name.includes(textValue));

	return (
		<>
			<h1>오늘의 메뉴</h1>
			<SearchBar
				btnValue={btnValue}
				setBtnValue={setBtnValue}
				textValue={textValue}
				setTextValue={setTextValue}
			/>
			<RestaurantTable restaurants={filteredList}/>
		</>
	);
}
