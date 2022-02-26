import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Production Environment link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Production Environment/i);
  expect(linkElement).toBeInTheDocument();
});
