import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Development Environment link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Development Environment/i);
  expect(linkElement).toBeInTheDocument();
});
