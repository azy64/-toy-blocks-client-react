import { render, screen } from '@testing-library/react';
import App from './App';

test('renders element', () => {
  render(<App />);
  const element = screen.getByText(/Nodes/i);
  expect(element).toBeInTheDocument();
});
