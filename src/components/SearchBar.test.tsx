import { render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

const context = describe;

let placeholder: string;

describe('SearchBar', () => {
  function renderSearchBar() {
    render(<SearchBar placeholder={placeholder} />);
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
});
