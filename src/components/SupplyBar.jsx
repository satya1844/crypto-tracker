export function SupplyBar({ current, max, symbol }) {
  const percent = max ? (current / max) * 100 : 100;

  return (
    <div>
      <div className="text-xs mb-1 text-gray-500">{current.toLocaleString()} {symbol}</div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
