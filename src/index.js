import React from 'react';
import './index.scss';
import App from './App';
import { store } from './app/store';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './fonts/Sansation_Bold_Italic.ttf';
import './fonts/Sansation_Bold.ttf';
import './fonts/Sansation_Italic.ttf';
import './fonts/Sansation_Light_Italic.ttf';
import './fonts/Sansation_Light.ttf';
import './fonts/Sansation_Regular.ttf';
import { checkAuthUser } from './features/user/UserSlice';

const container = document.getElementById('root');
const root = createRoot(container);

async function init() {
  await store.dispatch(checkAuthUser());
  root.render(
    <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  );
}

init()