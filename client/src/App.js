import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import NavBar from './components/Navbar';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';



const App = observer(() => {
  const { user } = useContext(Context)
  const [load, setLoad] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(() => setLoad(false))
    }, 2000)
  }, [])
  if (load) {
    return <Spinner animation="grow" variant="secondary" className='d-flex justify-content-center align-items-center' />

  }

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <AppRouter />
      </div>
    </BrowserRouter>

  );
})

export default App;
