import { reduxRender } from './utils/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders App component', () => {
    reduxRender(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
  });
});
