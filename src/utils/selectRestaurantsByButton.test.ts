import selectRestaurantsByButton from './selectRestaurantsByButton';

import Restaurant from '../types/RestaurantType';

describe('selectRestaurantsByButton 함수는', () => {
  const restaurants: Restaurant[] = [
    {
      id: '1',
      category: '한식',
      name: '한식집',
      menu: [],
    },
    {
      id: '2',
      category: '양식',
      name: '양식집',
      menu: [],
    },
    {
      id: '3',
      category: '일식',
      name: '일식집',
      menu: [],
    },
    {
      id: '4',
      category: '한식',
      name: '한식집2',
      menu: [],
    },
  ];

  const 한식 = '한식';
  const 양식 = '양식';
  const 일식 = '일식';

  it('category 가 한식인 Restaurant 배열을 리턴한다.', () => {
    const categories = selectRestaurantsByButton(restaurants, 한식);
    expect(
      categories.every(
        (restaurant: Restaurant) => restaurant.category === 한식,
      ),
    ).toBe(true);
  });
});
