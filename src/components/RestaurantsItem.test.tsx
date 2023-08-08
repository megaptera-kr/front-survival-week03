import { render } from '@testing-library/react';

import RestaurantsItem from './RestaurantsItem';

import { RestaurantItem } from '../types/restaurants';
import priceToLocal from '../utils/priceToLocal';

describe('RestaurantsItem', () => {
  it('name, category, menu를 보여준다.', () => {
    const restaurant: RestaurantItem = {
      id: '1',
      name: '테라식당',
      category: '한식',
      menu: [
        {
          id: '1',
          name: '비빔밥',
          price: 9000,
        },
      ],
    };
    const { container } = render(
      <table>
        <tbody>
          <RestaurantsItem restaurant={restaurant} />
        </tbody>
      </table>,
    );

    expect(container).toHaveTextContent(restaurant.name);
    expect(container).toHaveTextContent(restaurant.category);
    expect(container).toHaveTextContent(restaurant.menu[0].name);
    expect(container).toHaveTextContent(priceToLocal(restaurant.menu[0].price));
  });
});
