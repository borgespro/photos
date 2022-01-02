import React from 'react';
import { ThemeProvider } from 'styled-components';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';

import theme from './globals/styles/theme';
import rootReducer from './store/reducers';
import mainSaga from './store/sagas';

type ConfigProps = {
  children: React.ReactNode
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mainSaga);

export default function Config({ children } :ConfigProps): React.ReactElement {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}
