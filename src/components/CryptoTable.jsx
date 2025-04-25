import { useSelector, useDispatch } from 'react-redux';
import CryptoRow from './CryptoRow';
import { selectFilteredAndSortedAssets, setFilter, setSortBy } from '../features/crypto/cryptoSlice';

function CryptoTable() {
  const dispatch = useDispatch();
  const cryptoAssets = useSelector(selectFilteredAndSortedAssets);

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <div className="flex justify-between p-4">
        <select
          onChange={(e) => dispatch(setFilter(e.target.value))}
          className="border rounded p-2"
        >
          <option value="all">All</option>
          <option value="gainers">Top Gainers</option>
          <option value="losers">Top Losers</option>
        </select>
        <select
          onChange={(e) => dispatch(setSortBy(e.target.value))}
          className="border rounded p-2"
        >
          <option value="price">Price</option>
          <option value="marketCap">Market Cap</option>
          <option value="volume24h">24h Volume</option>
        </select>
      </div>
      <table className="table-fixed min-w-full text-sm text-left border border-gray-200 rounded-md">
        <thead className="table-header text-xs text-gray-600 uppercase">
          <tr>
            <th className="w-8 px-4 py-3">#</th>
            <th className="w-32 px-4 py-3">Name</th>
            <th className="w-24 px-4 py-3 text-right">Price</th>
            <th className="w-16 px-4 py-3 text-right">1h %</th>
            <th className="w-16 px-4 py-3 text-right">24h %</th>
            <th className="w-16 px-4 py-3 text-right">7d %</th>
            <th className="w-32 px-4 py-3 text-right">Market Cap</th>
            <th className="w-32 px-4 py-3 text-right">Volume (24h)</th>
            <th className="w-32 px-4 py-3 text-right">Circulating Supply</th>
            <th className="w-24 px-4 py-3 text-right">Max Supply</th>
            <th className="w-24 px-4 py-3 text-right">Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {cryptoAssets.map((asset, index) => (
            <CryptoRow key={asset.id} asset={asset} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CryptoTable;
