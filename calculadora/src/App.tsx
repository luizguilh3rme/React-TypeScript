import { useState } from 'react'
import './App.css'
import logoImg from './assets/logo.png'

function App() {
  

  return (
    <>
      <main className='container'>
        <img src={logoImg} alt="Logo da calculadora de gasolina e alcool" />

        <h1 className='title'>QUal a melhor opção</h1>

        <form action="">
          <label>Alcool (preço por litro)</label>
          <input className='input' type="number" placeholder='4,90'
                 min="1" step="0.01" required /> {/* Required faz o campo ser obrigatorio */}
                

          <label>Gasolina (preço por litro)</label>
          <input className='input' type="number" placeholder='4,90'
                 min="1" step="0.01" required /> {/* Required faz o campo ser obrigatorio */}

                 <input className='button' type="submit" value="Calcular" />
        </form>
      </main>
    </>
  )
}

export default App
