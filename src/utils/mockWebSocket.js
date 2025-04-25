import { simulatePriceChange } from '../features/crypto/cryptoSlice';

export function startMockWebSocket(store) {
  setInterval(() => {
    store.dispatch(simulatePriceChange());
  }, 2000); // Update every 2 seconds
}