import React from 'react';
import AddStock from './components/AddStock';
import Watchlist from './components/Watchlist';

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: 700, margin: '40px auto', padding: 20 }}>
      <h1 style={{ textAlign: 'center' }}>Stock Watchlist</h1>
      <AddStock />
      <Watchlist />
    </div>
  );
}