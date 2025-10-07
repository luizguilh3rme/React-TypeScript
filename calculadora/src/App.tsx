import { useState, type FormEvent } from 'react'
import './App.css'
import logoImg from './assets/logo.png'

interface InfoProps{
  title: string;
  gasolina: string | number;
  alcool: string | number;
}

function App() {

  const [gasolinaInput, setGasolinaInput] = useState(1)
  const [acoolInput, setAlccolInput] = useState(1)  
  const [info, setInfo] = useState<InfoProps>()

  function calcular(event:FormEvent){
    event.preventDefault();

    let calculo = (acoolInput / gasolinaInput)
    console.log(calculo)

    if(calculo <= 0.7){
      setInfo({
        title: "Compensa usar Alcool",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(acoolInput)
      })
    } else{
      setInfo({
        title: "Compensa usar Gasolina",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(acoolInput)
      })
    }
  }

  function formatarMoeda(valor: number){
    let valorFormatado = valor.toLocaleString("pt-br",
      {
        style: "currency",
        currency: "BRL"
      }
    )

    return valorFormatado;
  }

  return (
    <>
      <main className='container'>
        <img src={logoImg} alt="Logo da calculadora de gasolina e alcool" />

        <h1 className='title'>QUal a melhor opção</h1>

        <form className='form' onSubmit={calcular}>
          <label>Alcool (preço por litro)</label>
          <input className='input' type="number" placeholder='4,90'
                 min="1" step="0.01" required value={acoolInput} onChange={(e) => setAlccolInput(Number(e.target.value))} /> {/* Required faz o campo ser obrigatorio */}
                

          <label>Gasolina (preço por litro)</label>
          <input className='input' type="number" placeholder='4,90'
                 min="1" step="0.01" required value={gasolinaInput} onChange={(e) => setGasolinaInput(Number(e.target.value))}  /> {/* Required faz o campo ser obrigatorio */}

                 <input className='button' type="submit" value="Calcular" />
        </form>

        {info && Object.keys(info).length > 0 &&(
        <section className='result'>
          <h2 className='result-title'>
            {info.title}
          </h2>

          <span>Alcool {info.alcool}</span>
          <span>Gasolina {info.gasolina}</span>
        </section>)}
      
      </main>
    </>
  )
}


export default App

