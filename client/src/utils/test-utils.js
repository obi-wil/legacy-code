import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// Import your own reducer
import reducer from '../store/reducers/reducers';

function reduxRender(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState, applyMiddleware(thunk)),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
// override render method
export { reduxRender };
