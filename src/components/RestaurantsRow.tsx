import RestaurantItem from './RestaurantItem';

function RestaurantsRow({ filteredMenus }) {
  return (
    <tbody>
      {
        filteredMenus.map((filteredMenu) => (
          <RestaurantItem key={filteredMenu.name} restaurant={filteredMenu} />
        ))
      }
    </tbody>
  );
}

export default RestaurantsRow;
