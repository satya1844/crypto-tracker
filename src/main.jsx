import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { startBinanceWebSocket } from './utils/binanceWebSocket';
import './index.css';

startBinanceWebSocket(store); // Start Binance WebSocket

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
