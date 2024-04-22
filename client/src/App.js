import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import NavBar from './components/Navbar';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <AppRouter />
      </div>
    </BrowserRouter>

  );
}

export default App;
