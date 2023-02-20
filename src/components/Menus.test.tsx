import { render, screen } from '@testing-library/react';

import Menus from './Menus';

import Restaurant from '../types/Restaurant';

let restaurant: Restaurant;

const context = describe;

describe('Menus', () => {
  function renderMenus() {
    render(<Menus restaurant={restaurant} />);
  }

  context('사용자가 페이지에 접속하면', () => {
    beforeEach(() => {
      restaurant = {
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
    });

    it('해당 식당의 메뉴 리스트가 render된다', () => {
      renderMenus();

      screen.getByText('짜장면(8,000원)');
      screen.getByText('차돌짬뽕(9,000원)');
    });
  });
});
