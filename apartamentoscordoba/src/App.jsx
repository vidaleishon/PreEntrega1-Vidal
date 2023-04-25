import './App.css'
import Menu from './components/Menu/Menu'
import Inicio from './components/Inicio/inicio'
import { ComponenteContainer } from './components/ComponenteContainer/ComponenteContainer'
import CartWidget from './components/CartWidget.jsx/CartWidget'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Galerias from './components/Galeria/Galerias'



function App() {

  return (

    <BrowserRouter>
    <Menu />

    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/departamentos' element={<ComponenteContainer/>}/>
      <Route path='/cart' element={<CartWidget/>}/>
      <Route path='/galeria' element={<Galerias/>}/>
      
      
      <Route path='*' element={<Navigate to='/'/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
