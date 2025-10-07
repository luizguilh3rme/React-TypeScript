import { useState } from 'react'

import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState([
    'Estudar react com  typescript',
    'Comprar pão',
    'Estudar ingles a noite'
  ])

  //Função com alerta caso o usuario não digite nada no input
  function handleRegister(){
    if(!input){
      alert('Preencha o nome da tarefa')
      return;
    }

  //Código para adicionar novos elemento digitados na lista existente
    setTasks( tarefas => [...tarefas, input])

  //Código para apagar o texto escrito no input assim que clicar no botão de adicionar
    setInput("")
  }

  return (
    <>
      <h1>Lista de tarefas</h1>
      <input type="text"
      placeholder='Digite o nome da tarefa...' 
      value={input}
      onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleRegister}>Adicionar Tarefa</button>

      <hr />

      {/* Código para exibir as Tasks */}
      {tasks.map( (item, index) =>(
        <section key={item}>
          <span>{item}</span>
          <button>Excluir</button>
        </section>
      ))}
    </>
  )
}

export default App
