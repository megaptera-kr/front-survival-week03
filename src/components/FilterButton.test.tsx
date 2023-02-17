import { fireEvent, render, screen } from '@testing-library/react';

import FilterButton from './FilterButton';

const context = describe;

let category: string;

const setFilterCategory = jest.fn();

describe('FilterButton', () => {
  function renderFilterButton() {
    render(<FilterButton
      category={category}
      setFilterCategory={setFilterCategory}
    />);
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

  context('사용자가 "한식" 버튼을 누르면', () => {
    beforeEach(() => {
      category = '한식';
    });

    it('"한식" value를 전달하는 버튼 이벤트가 발생한다', () => {
      renderFilterButton();

      fireEvent.click(screen.getByText('한식'));

      expect(setFilterCategory).toBeCalledWith('한식');
      expect(setFilterCategory).not.toBeCalledWith('중식');
    });
  });
});
