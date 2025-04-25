import { createSlice, createSelector } from '@reduxjs/toolkit';
import { cryptoData } from '../../data/cryptoData';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: cryptoData, // Use mock data for now
    filter: localStorage.getItem('filter') || 'all',
    sortBy: localStorage.getItem('sortBy') || 'price',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
      localStorage.setItem('filter', action.payload);
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
      localStorage.setItem('sortBy', action.payload);
    },
    updateCrypto: (state, action) => {
      state.assets = action.payload;
    },
  },
});

// Selectors
export const selectCryptoAssets = (state) => state.crypto.assets;
export const selectFilter = (state) => state.crypto.filter;
export const selectSortBy = (state) => state.crypto.sortBy;

export const selectFilteredAndSortedAssets = createSelector(
  [selectCryptoAssets, selectFilter, selectSortBy],
  (assets, filter, sortBy) => {
    let filteredAssets = assets;

    // Apply filter
    if (filter === 'gainers') {
      filteredAssets = assets.filter((asset) => asset.percentChange24h > 0);
    } else if (filter === 'losers') {
      filteredAssets = assets.filter((asset) => asset.percentChange24h < 0);
    }

    // Sort the filtered assets (create a copy before sorting)
    return [...filteredAssets].sort((a, b) => b[sortBy] - a[sortBy]);
  }
);

export const { updateCrypto, setFilter, setSortBy } = cryptoSlice.actions;
export default cryptoSlice.reducer;
