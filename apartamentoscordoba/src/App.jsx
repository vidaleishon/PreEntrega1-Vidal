import './App.css'
import Menu from './components/Menu/Menu'
import Inicio from './components/ComponenteClase/inicio'
import { ComponenteContainer } from './components/ComponenteContainer/ComponenteContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ReservaDias from './components/ReservaDias/ReservaDias'
import CartContainer from './components/CartContainer/CartContainer'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {

  return (

    <BrowserRouter>
    <Menu />

    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/departamentos' element={<ComponenteContainer catalogo='Departamentos'/>}/>
      <Route path='/detalle' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<CartContainer/>}/>
      <Route path='/reserva' element={<ReservaDias/>}/>

      <Route path='*' element={<Navigate to='/'/>} />
    </Routes>
    

    </BrowserRouter>
  )

}

export default App
