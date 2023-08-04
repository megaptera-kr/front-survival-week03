import { render } from '@testing-library/react';

import RestaurantsTable from './RestaurantsTable';

import { restaurants as restaurantsData } from '../../restaurants.json';

describe('RestaurantsTable', () => {
  describe('restaurants가 없는 경우', () => {
    it('renders "텅~" text', () => {
      const { container } = render(<RestaurantsTable restaurants={[]} />);

      expect(container).toHaveTextContent('텅~');
    });
  });

  describe('restaurants가 있는 경우', () => {
    it('restaurants를 화면에 보여준다.', () => {
      const restaurants = [restaurantsData[0]];

      const { container } = render(
        <RestaurantsTable restaurants={restaurants} />,
      );

      expect(container).toBeVisible();
    });
  });
});
