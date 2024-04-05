import React from 'react';
import logo from './logo.png';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRouter />
      </div>
    </BrowserRouter>

  );
}

export default App;
