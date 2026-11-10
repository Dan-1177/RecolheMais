import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './Header'
import Menu from './Menu'

function App() {
  let contador = 0;
  function increment(){
    contador++;
    console.log(contador);

  return (
    <>
      <Header title="Bem vindo Danilo"/>
      <Menu />
      <section id="center">

        <div>
          <h1>Projeto PI</h1>
          <p><input type="Button" value="Clique" onClick={increment} /></p>
            <p>{contador}</p> Clique!
        </div>

        </section>

      <section id="spacer"></section>
    </>
  )
}

function App() {
  let contador = 0;
  function increment(){
    contador++;
    console.log(contador);
  }

  return(
    <div className="App">
      <Header title="Header Param" />
      <img src={logo} className= "App-logo" alt="logo" />
      <p>
        <input type="button" value="clique" onClick={increment} />

      </p>
      <p>{contador}</p> clique!
    </div>
  )
}

export default App
