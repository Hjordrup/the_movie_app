// React and ReactDom
import React from 'react';
import ReactDOM from 'react-dom';

//React Router.
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//React redux.
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//Components Import
import App from './App';
import Popular from './components/Popular';
import NowPlaying from './components/NowPlaying';
import reducers from './state/reducers/index';

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="popular" element={<Popular />} />
        <Route path="nowplaying" element={<NowPlaying />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
