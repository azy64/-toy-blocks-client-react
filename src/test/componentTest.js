import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/Store';
import Container from '../components/Container';
import FakeComponent from './FakeComponent';

describe('<Container />', () => {
  it('should render', () => {
    render(
      <Provider store={store}>
        <FakeComponent>
          <Container />
        </FakeComponent>

      </Provider>,
    );
    const container = screen.getByTestId('container');
    expect(container).toBeInTheDocument();
  });
});
