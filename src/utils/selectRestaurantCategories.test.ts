import selectRestaurantCategories from './selectRestaurantCategories';

import Restaurant from '../types/RestaurantType';

describe('selectRestaurantCategories 함수는', () => {
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

  it('리턴 값의 타입이 string[] 이고, 각 요소의 타입이 string 이다.', () => {
    const categories = selectRestaurantCategories(restaurants);
    expect(categories).toBeInstanceOf(Array<string>);
    expect(categories.every((category) => typeof category === 'string')).toBe(
      true,
    );
  });
  it('값이 유니크한 배열을 리턴한다.', () => {
    const categories = selectRestaurantCategories(restaurants);
    const expectArray = new Set(['한식', '양식', '일식']);
    expect(categories.length).toBe([...expectArray].length);
  });
});
