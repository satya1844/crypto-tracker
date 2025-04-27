<div className="overflow-x-auto overflow-y-auto bg-white shadow-md rounded-lg"
     style={{ width: '1500px', height: '600px' }}>
  <div className="flex justify-between p-4">
    {/* Filters */}
    <select
      onChange={(e) => dispatch(setFilter(e.target.value))}
      className="border rounded p-2"
    >
      <option value="all">All</option>
      <option value="gainers">Top Gainers</option>
      <option value="losers">Top Losers</option>
    </select>

    {/* Sorting */}
    <select
      onChange={(e) => dispatch(setSortBy(e.target.value))}
      className="border rounded p-2"
    >
      <option value="price">Price</option>
      <option value="marketCap">Market Cap</option>
      <option value="volume24h">24h Volume</option>
    </select>
  </div>

  <table className="table-fixed w-full text-sm text-left border border-gray-200 rounded-md">
    <thead className="text-xs text-gray-600 uppercase">
      <tr>
        <th className="w-8 px-4 py-3">#</th>
        <th className=" px-4 py-3 truncate" style={{ width: '250px' }} >Name</th>
        <th className="w-24 px-4 py-3 text-right truncate">Price</th>
        <th className="w-16 px-4 py-3 text-right truncate">1h %</th>
        <th className="w-16 px-4 py-3 text-right truncate">24h %</th>
        <th className="w-16 px-4 py-3 text-right truncate">7d %</th>
        <th className="w-32 px-4 py-3 text-right truncate">Market Cap</th>
        <th className="w-32 px-4 py-3 text-right truncate">Volume (24h)</th>
        <th className="w-32 px-4 py-3 text-right truncate">Circulating Supply</th>
        <th className="w-24 px-4 py-3 text-right truncate">Max Supply</th>
        <th className="w-24 px-4 py-3 text-right truncate">Last 7 Days</th>
      </tr>
    </thead>
    <tbody>
      {cryptoAssets.map((asset, index) => (
        <CryptoRow key={asset.id} asset={asset} index={index} />
      ))}
    </tbody>
  </table>
</div>
