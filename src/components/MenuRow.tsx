import Menu from '../type/Menu';

type MenuRowProps = {
	menus: Menu[];
};

export default function MenuRow({menus}: MenuRowProps) {
	return (
		<ul>
			{menus.map((food) => (
				<li>{food.name}</li>
			))}
		</ul>
	);
}
