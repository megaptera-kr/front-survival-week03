import { render, screen } from '@testing-library/react';

import RestaurantInformation from './RestaurantInformation';

import Restaurant from '../types/Restaurant';

const context = describe;

const restaurant: Restaurant = {
  id: '1',
  category: '중식',
  name: '메가반점',
  menu: [
    { id: '1', name: '짜장면', price: 8000 },
    { id: '2', name: '짬뽕', price: 8000 },
    { id: '3', name: '차돌짬뽕', price: 9000 },
    { id: '4', name: '탕수육', price: 14000 },
  ],
};

describe('RestaurantInformation', () => {
  function renderRestaurantInformation() {
    render(<RestaurantInformation restaurant={restaurant} />);
  }

  context('사용자가 페이지에 접속하면', () => {
    it('레스토랑 테이블의 레스토랑 정보가 render 된다.', () => {
      renderRestaurantInformation();

      screen.getByText('메가반점');
      screen.getByText('중식');
      screen.getByText(/짜장면/);
    });
  });
});
