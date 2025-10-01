import {useState}from 'react'

// Interface para unir  o nome e idade
interface InfoAlunoProps{
  nome: string;
  idade: string;
}

export default function App(){
  // Const para mostrar nome e idade, a const roxa guarda o valor e a const verde atualiza o valor
  const [input, setInput] = useState("");
  const [idade, setIdade] = useState("");
  const [infoAluno, setInfoAluno] = useState<InfoAlunoProps>()

  // Const para executar o contador
  const [contador, setContador] =  useState(0);


  //Função para executar e mostrar o nome e idade
  function mostrarAluno(){
    setInfoAluno({
      nome: input,
      idade: idade,
    })
  }


  //Funções para executar o contador a partir do método onclick
  function adicionar(){
    setContador(valorAtual => valorAtual +1)
  }

  function diminuir(){
    if(contador === 0){ //impede que o contador va para os números negativos
      return;
    }
    setContador(valorAtual => valorAtual -1)
  }


  return(
    <div>
      {/* Código para mostrar nome e idade */}
      <h1>Conhecendo useSate</h1>

      <input type="text"
      placeholder="Digite seu nome"
      value={input}
      onChange={ (e) => setInput(e.target.value)} />

      <br />
      <br />

      <input type="text"
      placeholder='Digite sua idade'
      value={idade}
      onChange={ (e) => setIdade (e.target.value)} />

      <br />
      <br />

      <button onClick={mostrarAluno}>Mostrar Aluno</button>

      <hr />

      <h3>Bem vindo: {infoAluno?.nome}</h3>
      <h4>Idade: {infoAluno?.idade}</h4>

      <hr />
      <br />


      {/* Código do contador */}
      <h1>Contador com useState</h1>
      <button onClick={adicionar}>+</button> {contador} <button onClick={diminuir}>-</button>

    </div>
  )
}
