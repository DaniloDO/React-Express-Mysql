import logo from './logo.svg';
import './App.css';

import React from 'react'
import { useState, useEffect } from 'react';

import Table from './components/Table.js';
import Sidebar from './components/Sidebar.js';

function App() {

  const [text, setText] = useState('String')

  useEffect(() => {

    async function serverData () {
      const response = await fetch('http://localhost:5000/')
      const jsonResponse = await response.json()
      await setText(jsonResponse.title)
    }
    serverData()

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Table />
        <Sidebar /> 
      </header>
    </div>
  );
}

export default App;
