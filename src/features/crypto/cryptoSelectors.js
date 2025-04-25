import { createSelector } from '@reduxjs/toolkit';

export const selectCryptoAssets = (state) => state.crypto.assets;
export const selectFilter = (state) => state.crypto.filter;
export const selectSortBy = (state) => state.crypto.sortBy;

export const selectFilteredAndSortedAssets = createSelector(
  [selectCryptoAssets, selectFilter, selectSortBy],
  (assets, filter, sortBy) => {
    let filteredAssets = assets;

    if (filter === 'gainers') {
      filteredAssets = assets.filter((asset) => asset.percentChange24h > 0);
    } else if (filter === 'losers') {
      filteredAssets = assets.filter((asset) => asset.percentChange24h < 0);
    }

    return filteredAssets.sort((a, b) => b[sortBy] - a[sortBy]);
  }
);
