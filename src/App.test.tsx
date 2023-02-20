import { render, screen } from '@testing-library/react';

import App from './App';

describe('App ', () => {
  it('renders without crash', () => {
    render(<App />);

    screen.getByText('오늘의 메뉴');
  });
});
