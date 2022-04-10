import { Provider } from 'react-redux';
import store from './redux/Store';
import './App.css';
import Container from './components/Container';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container />
      </div>
    </Provider>
  );
}

export default App;
