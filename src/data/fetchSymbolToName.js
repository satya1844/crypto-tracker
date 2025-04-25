export async function fetchSymbolToName() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/list');
    const data = await response.json();

    // Create a mapping of symbols to names
    const symbolToName = {};
    data.forEach((coin) => {
      if (coin.symbol) {
        symbolToName[coin.symbol.toUpperCase()] = coin.name;
      }
    });

    return symbolToName;
  } catch (error) {
    console.error('Failed to fetch symbol-to-name mapping:', error);
    return {};
  }
}