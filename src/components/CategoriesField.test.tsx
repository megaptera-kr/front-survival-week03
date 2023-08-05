import { render } from '@testing-library/react';

import CategoriesField from './CategoriesField';

describe('CategoriesField', () => {
  const CategoriesFieldProps = {
    categories: ['한식', '중식', '일식'],
    handleClickCategory: jest.fn(),
  };

  it('카테고리를 화면에 표시한다.', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const { container } = render(<CategoriesField {...CategoriesFieldProps} />);
    const categories = container.querySelectorAll('li');

    expect(categories).toHaveLength(3);
  });

  it('카테고리를 클릭하면 onClickCategory 함수가 실행된다.', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const { container } = render(<CategoriesField {...CategoriesFieldProps} />);
    const categories = container.querySelectorAll('li button');

    categories.forEach((category) => {
      (category as HTMLButtonElement).click();
    });

    expect(CategoriesFieldProps.handleClickCategory).toBeCalledTimes(3);
  });
});
