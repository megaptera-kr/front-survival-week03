import selectCategories from './selectCategories';

import { restaurants } from '../../restaurants.json';

describe('selectCategories', () => {
  it('레스토랑 카테고리를 추출한다', () => {
    const categories = ['전체', '중식', '한식', '일식'];
    expect(selectCategories(restaurants)).toEqual(categories);
  });
});
