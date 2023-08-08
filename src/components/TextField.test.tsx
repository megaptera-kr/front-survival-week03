import { render, screen } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  it('label, placeholder를 화면에 표시한다.', () => {
    const TextFieldProps = {
      id: 'search-input',
      label: '검색',
      placeholder: '식당 이름',
      searchText: '',
      setSearchText: jest.fn(),
    };
    // eslint-disable-next-line react/jsx-props-no-spreading
    const { container } = render(<TextField {...TextFieldProps} />);
    const label = container.querySelector('label');
    const inputPlaceholder = screen.getByPlaceholderText('식당 이름');

    expect(label).toHaveTextContent('검색');
    expect(inputPlaceholder).toBeInTheDocument();
  });

  it('입력값을 받아온다.', () => {
    const TextFieldProps = {
      id: 'search-input',
      label: '검색',
      placeholder: '식당 이름',
      searchText: '메가테라 식당',
      setSearchText: jest.fn(),
    };
    // eslint-disable-next-line react/jsx-props-no-spreading
    const { container } = render(<TextField {...TextFieldProps} />);
    const input = container.querySelector('input');

    expect(input).toHaveValue('메가테라 식당');
  });
});
