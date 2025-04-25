import { PercentChange } from './PercentChange';
import MiniChart from './MiniChart';
import { SupplyBar } from './SupplyBar';

function CryptoRow({ asset, index }) {
  return (
    <tr className="table-row border-b transition">
      <td className="px-4 py-3 text-sm text-gray-500">{index + 1}</td>
      <td className="px-4 py-3 flex items-center gap-2">
        <img src={asset.logo} alt={asset.name} className="w-6 h-6" />
        <div>
          <div className="font-medium text-gray-900">{asset.name}</div>
          <div className="text-xs text-gray-400">{asset.symbol}</div>
        </div>
      </td>
      <td className="px-4 py-3 text-right font-medium text-gray-900">${asset.price.toLocaleString()}</td>
      <td className="px-4 py-3 text-right"><PercentChange value={asset.percentChange1h} /></td>
      <td className="px-4 py-3 text-right"><PercentChange value={asset.percentChange24h} /></td>
      <td className="px-4 py-3 text-right"><PercentChange value={asset.percentChange7d} /></td>
      <td className="px-4 py-3 text-right font-medium text-gray-900">${asset.marketCap.toLocaleString()}</td>
      <td className="px-4 py-3 text-right">
        <div className="font-medium text-gray-900">${asset.volume24h.toLocaleString()}</div>
        <div className="text-xs text-gray-400">{(asset.volume24h / asset.price).toFixed(2)} {asset.symbol}</div>
      </td>
      <td className="px-4 py-3 text-right font-medium text-gray-900">{asset.circulatingSupply.toLocaleString()} {asset.symbol}</td>
      <td className="px-4 py-3 text-right font-medium text-gray-900">{asset.maxSupply ? asset.maxSupply.toLocaleString() : 'N/A'}</td>
      <td className="px-4 py-3 text-right"><MiniChart chart={asset.chart} /></td>
    </tr>
  );
}

export default CryptoRow;
