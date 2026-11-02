import { useState } from 'react'
import './App.css'
import Header from './components/HeaderPagina'
import Nav from './components/NavPagina'
import Cuerpo from './components/CuerpoPagina'
import ListaCursos from './components/ListaCursos'
import CursoApp from './components/PracticaPagina'
import PaginaBusqueda from './components/PaginaBusqueda'
import ContadorPagina from './components/ContadorPagina'
import FormularioPagina from './components/FormularioPagina'

function App() {
  const [count, setCount] = useState(0)
  const menus= 
      [
        {nombre:"Inicio"},
        {nombre:"Nosotros"},
        {nombre:"Contacto"},
        {nombre:"Otrito"}
      ]
  const saludito ="Saludo";
  const saludito2 ="Saludo2";

  return (
    <>
    <Header/>  
    <Nav saludito ={saludito} saludo = {saludito2} />        
    <FormularioPagina/>
    <ListaCursos/>
    <CursoApp/>
    <PaginaBusqueda/>
    <ContadorPagina/>
    </>
  )
}

export default App


