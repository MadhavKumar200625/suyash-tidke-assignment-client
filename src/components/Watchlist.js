import React, { useEffect, useState } from 'react';
import { getStocks } from '../api';

export default function Watchlist() {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const res = await getStocks();
      setStocks(res.stocks || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    function onUpdate() {
      load();
    }
    window.addEventListener('stocks-updated', onUpdate);
    return () => window.removeEventListener('stocks-updated', onUpdate);
  }, []);

  return (
    <div>
      <h2>My Watchlist</h2>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'crimson' }}>{error}</div>}
      {!loading && !error && stocks.length === 0 && <div>No stocks yet</div>}
      <ul>
        {stocks.map(s => (
          <li key={s} style={{ padding: '6px 0', fontSize: 18 }}>{s}</li>
        ))}
      </ul>
    </div>
  );
}