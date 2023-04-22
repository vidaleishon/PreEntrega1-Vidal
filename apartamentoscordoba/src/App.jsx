import './App.css'
import Menu from './components/Menu/Menu'
import Inicio from './components/Inicio/inicio'
import { ComponenteContainer } from './components/ComponenteContainer/ComponenteContainer'
import ReservaDias from './components/ReservaDias/ReservaDias'
import CartWidget from './components/CartWidget.jsx/CartWidget'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {

  return (

    <BrowserRouter>
    <Menu />

    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/departamentos' element={<ComponenteContainer catalogo='Departamentos'/>}/>
      <Route path='/cart' element={<CartWidget/>}/>
      <Route path='/reserva' element={<ReservaDias/>}/>

      <Route path='*' element={<Navigate to='/'/>} />
    </Routes>
  
    </BrowserRouter>
  )

}

export default App
