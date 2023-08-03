import RESTAURANTS_DATA from '../../../restaurants.json';

type Props = {
  data: typeof RESTAURANTS_DATA.restaurants
}

const HEADERS = [
  { name: '식당 이름', value: 'name' },
  { name: '종류', value: 'category' },
  { name: '메뉴', value: 'menu' },
] as const;

function MenuList({ data }: Props) {
  if (data.length === 0) {
    return (
      <div>
        음식을 찾을 수 없습니다!
      </div>
    );
  }

  return (
    <div>
      <table>
        <thead>
          {HEADERS.map(({ name, value }) => <th key={`${value}_header`}>{name}</th>)}
        </thead>
        <tbody>
          {data.map(({
            id, name, category, menu,
          }) => (
            <tr key={`row_${id}`}>
              <td>{name}</td>
              <td>{category}</td>
              <td>
                {menu.map((menuItem) => (
                  <ul key={`menu_${menuItem.id}`}>
                    <li>
                      {menuItem.name}
                      {' '}
                      (
                      {menuItem.price.toLocaleString()}
                      원)
                    </li>

                  </ul>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MenuList;
