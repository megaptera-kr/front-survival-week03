import Restaurant from '../types/Restaurant';
import RestaurantsRow from './RestaurantsRow';

type RestaurantsInCategoryProps = {
    restaurant: Restaurant[];
};

export default function RestaurantsInCategory({ restaurant }: RestaurantsInCategoryProps) {
  return (
    <>
      {restaurant.map((Bistro) => (
        <RestaurantsRow key={Bistro.id} Bistro={Bistro} />
      ))}
    </>
  );
}
