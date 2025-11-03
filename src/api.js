const API_BASE = process.env.REACT_APP_API_URL || '';

async function addStock(symbol) {
  const res = await fetch(`${API_BASE}/api/stocks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ symbol })
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || JSON.stringify(data));
  return data;
}

async function getStocks() {
  const res = await fetch(`${API_BASE}/api/stocks`);
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || JSON.stringify(data));
  return data;
}

export { addStock, getStocks };