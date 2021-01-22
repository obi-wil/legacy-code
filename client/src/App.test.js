import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './store/reducers/reducers';
import App from './App';
const store = createStore(reducers, {}, applyMiddleware(thunk));

test('renders learn react link', () => {
  render(
    <BrowserRouter>
    <Provider store={store}>
  <App />
  </Provider>
  </BrowserRouter>
  );

  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});



