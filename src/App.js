import React, { useEffect, useState } from 'react';
import './App.css';
import { supabase } from './supabaseClient';

function App() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('test_table').select('*');
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setRows(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>MedJourney</h1>
        <p>Better Clinical Supply Chain Platform</p>
      </header>

      <nav className="app-sidebar">
        <ul>
          <li>📦 Forecasting</li>
          <li>🏥 Depot Management</li>
          <li>📅 Scheduling</li>
          <li>👥 Resource Planning</li>
          <li>📊 Dashboard</li>
        </ul>
      </nav>

      <main className="app-main">
        <h2>Welcome to MedJourney</h2>
        <p>Select a module from the sidebar to get started.</p>

        <h3>🔍 Live Test Data from Supabase</h3>
        <ul>
          {rows.map((row) => (
            <li key={row.id}>{row.name} — {row.role}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
