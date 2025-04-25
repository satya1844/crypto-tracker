import { updateCrypto } from '../features/crypto/cryptoSlice';
import { fetchSymbolToName } from '../data/fetchSymbolToName';

export async function startBinanceWebSocket(store) {
  const symbolToName = await fetchSymbolToName(); // Fetch real names from CoinGecko

  const socket = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr');

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);

    // Map Binance data to match your Redux state structure
    const formattedData = data.slice(0, 5).map((coin) => {
      const symbol = coin.s.replace('USDT', ''); // Remove 'USDT' from trading pair
      return {
        id: coin.s, // Symbol
        logo: `https://cryptoicons.org/api/icon/${symbol.toLowerCase()}/32`, // Example logo URL
        name: symbolToName[symbol] || symbol, // Use fetched name or fallback to symbol
        symbol: symbol,
        price: parseFloat(coin.c), // Current price
        percentChange1h: parseFloat(coin.P), // Price change percentage
        percentChange24h: parseFloat(coin.p), // Price change percentage (24h)
        percentChange7d: Math.random() * 10 - 5, // Mock 7d change (Binance doesn't provide this)
        marketCap: Math.random() * 1e12, // Mock market cap
        volume24h: parseFloat(coin.q), // Quote volume
        circulatingSupply: Math.random() * 1e7, // Mock circulating supply
        maxSupply: Math.random() * 1e8, // Mock max supply
        chart: 'https://via.placeholder.com/100x40?text=Chart', // Placeholder chart
      };
    });

    store.dispatch(updateCrypto(formattedData));
  };

  socket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  socket.onclose = () => {
    console.log('WebSocket connection closed.');
  };
}