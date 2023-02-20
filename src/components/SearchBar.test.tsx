import { fireEvent, render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

const context = describe;

let placeholder: string;
let filterText: string;

const setFilterText = jest.fn();

describe('SearchBar', () => {
  function renderSearchBar() {
    render(<SearchBar
      placeholder={placeholder}
      filterText={filterText}
      setFilterText={setFilterText}
    />);
  }

  context('사용자가 페이지에 접속하면', () => {
    beforeEach(() => {
      placeholder = '식당 이름';
    });

    it('검색 라벨과 지정된 placeholder가 있는 input이 render된다.', () => {
      renderSearchBar();

      screen.getByText('검색');
      screen.getByText('검색');
      screen.getByPlaceholderText('식당 이름');
    });
  });

  context('사용자가 검색 필드에 검색어를 입력하면', () => {
    it('입력 필드에 이벤트가 발생한다', () => {
      renderSearchBar();

      fireEvent.change(screen.getByLabelText('검색'), {
        target: { value: '메리김밥' },
      });

      screen.getByDisplayValue('메리김밥');
      expect(setFilterText).toBeCalledWith('메리김밥');
    });
  });
});
