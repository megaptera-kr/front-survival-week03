import Restaurant from "../type/Restaurant";
import RestaurantRow from "./RestaurantRow";

type RestaurantTableProps = {
	restaurants: Restaurant[];
};

export default function RestaurantTable({restaurants}: RestaurantTableProps) {
	return (
		<table>
			<thead>
				<tr>
					<th>식당 이름</th>
					<th>종류</th>
					<th>메뉴</th>
				</tr>
			</thead>
			<tbody>
				{restaurants.map((restaurant) => (
					<RestaurantRow restaurant={restaurant}/>
				))}
			</tbody>
		</table>
	);
}
