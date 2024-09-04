import React from "react"
import Home from './componentes/Home/Home';
import Nav from './componentes/Nav/Nav'
import Produto from './componentes/Produtos/Produto'
import Contato from './componentes/Contato/Contato'
import Error from './componentes/Error/Error'
import Sobre from './componentes/Sobre/Sobre'
import Footer from './componentes/Footer/Footer'

function App() {
  return (
    <>
    <Nav/>
    <Home/>
    <Produto/>
    <Contato/>
    <Error/>
    <Sobre/>
    <Footer/>
    </>
  )
}

export default App
