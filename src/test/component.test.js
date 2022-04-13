import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/Store';
import Container from '../components/Container';
import FakeComponent from './FakeComponent';

const someBlocks = ['The Human Torch', 'is denied', 'every', 'good',
  'By reason of these things', 'then the whaling voyage was welcome'];
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
    const test = screen.getByText('Nodes');
    expect(container).toBeInTheDocument();
    expect(test).toBeInTheDocument();
  });
  it('it should have nodes displaying', () => {
    render(
      <Provider store={store}>
        <FakeComponent>
          <Container />
        </FakeComponent>

      </Provider>,
    );
    const thawing = screen.getByText('Thawing Springs');
    const calm = screen.getByText('Calm Anchorage');
    const secret = screen.getByText('Secret Lowlands');
    expect(thawing).toBeInTheDocument();
    expect(calm).toBeInTheDocument();
    expect(secret).toBeInTheDocument();
  });
  it('it should change the button icon', () => {
    render(
      <Provider store={store}>
        <FakeComponent>
          <Container />
        </FakeComponent>

      </Provider>,
    );
    const btns = screen.getAllByRole('button');
    fireEvent.click(btns[0]);
    expect(btns[0].innerHTML).toBe('⌃');
    fireEvent.click(btns[0]);
    expect(btns[0].innerHTML).toBe('⌄');
  });

  it('check the presence of some blocks', () => {
    render(
      <Provider store={store}>
        <FakeComponent>
          <Container />
        </FakeComponent>

      </Provider>,
    );
    expect(screen.getByText(someBlocks[0])).toBeInTheDocument();
    expect(screen.getByText(someBlocks[1])).toBeInTheDocument();
    expect(screen.getByText(someBlocks[2])).toBeInTheDocument();
    expect(screen.getByText(someBlocks[3])).toBeInTheDocument();
    expect(screen.getByText(someBlocks[4])).toBeInTheDocument();
    expect(screen.getByText(someBlocks[5])).toBeInTheDocument();
  });
});
