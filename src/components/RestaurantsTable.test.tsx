import { render } from '@testing-library/react';

import RestaurantsTable from './RestaurantsTable';

import { restaurants as restaurantsData } from '../../restaurants.json';

describe('RestaurantsTable', () => {
  describe('restaurants가 없는 경우', () => {
    it('화면에 리스트를 노출하지 않는다.', () => {
      const { container } = render(<RestaurantsTable restaurants={[]} />);
      const tbody = container.querySelector('tbody');

      expect(tbody).toBeEmptyDOMElement();
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
