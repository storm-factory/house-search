import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const home = screen.getAllByText(/Home/i);
  let homeLink = home[0]
  expect(homeLink).toBeInTheDocument();
});
