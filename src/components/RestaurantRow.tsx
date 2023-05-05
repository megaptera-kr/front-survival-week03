import Restaurant from '../type/Restaurant';
import MenuRow from './MenuRow';

type RestaurantRowProps = {
	restaurant: Restaurant;
};

export default function RestaurantRow({restaurant}: RestaurantRowProps) {
	return (
		<tr>
			<td>{restaurant.name}</td>
			<td>{restaurant.category}</td>
			<td>
				<MenuRow menus={restaurant.menu}/>
			</td>
		</tr>
	);
}
