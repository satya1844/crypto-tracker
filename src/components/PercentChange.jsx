export function PercentChange({ value }) {
  const isPositive = value >= 0;
  return (
    <span className={`font-medium ${isPositive ? 'text-green' : 'text-red'}`}>
      {isPositive ? '▲' : '▼'} {Math.abs(value).toFixed(2)}%
    </span>
  );
}
