import { render, screen } from '@testing-library/react';

import FilterButton from './FilterButton';

const context = describe;

let category: string;

describe('FilterButton', () => {
  function renderFilterButton() {
    render(<FilterButton category={category} />);
  }

  context('사용자가 페이지에 접속하면', () => {
    beforeEach(() => {
      category = '중식';
    });

    it('데이터에 있는 식당들의 카테고리로 만들어진 필터 버튼이 render 된다', () => {
      renderFilterButton();

      screen.getByText('중식');
    });
  });
});
