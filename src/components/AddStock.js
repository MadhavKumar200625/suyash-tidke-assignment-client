import React, { useState } from 'react';
import { addStock } from '../api';

export default function AddStock() {
  const [symbol, setSymbol] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  function validateLocal(s) {
    return /^[A-Z]{1,5}$/.test(s);
  }

  async function onSubmit(e) {
    e.preventDefault();
    setMessage(null);
    const trimmed = symbol.trim().toUpperCase();
    if (!validateLocal(trimmed)) {
      setMessage('Symbol must be 1-5 uppercase letters only');
      return;
    }
    setLoading(true);
    try {
      await addStock(trimmed);
      setMessage(`Added ${trimmed}`);
      setSymbol('');
      window.dispatchEvent(new Event('stocks-updated'));
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
      <input
        aria-label="Stock symbol"
        value={symbol}
        onChange={e => setSymbol(e.target.value.toUpperCase())}
        placeholder="E.g. APPLE or TCS"
        style={{ flex: 1, padding: 10, fontSize: 16 }}
      />
      <button disabled={loading} style={{ padding: '10px 16px', fontSize: 16 }}>
        Add
      </button>
      {message && <div style={{ width: '100%', color: 'crimson', marginTop: 8 }}>{message}</div>}
    </form>
  );
}