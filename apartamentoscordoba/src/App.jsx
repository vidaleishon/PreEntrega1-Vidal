import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './Componentes/Menu.css'
import Menu from './Componentes/Menu'
import Inicio from "./Componentes/interacciones/inicio";
import Departamentos from './Componentes/interacciones/departamentos'

function App() {

  return (

    <>
    <Menu />

    <Inicio />

    <Departamentos />


    </>
  )

}

export default App
