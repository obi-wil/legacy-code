import { reduxRender } from './utils/test-utils';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {
  reduxRender(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
