import {Header} from './components/header'
import {Aluno} from './components/aluno'
import {Footer} from './components/footer'

export default function App(){
  return(
    <div>

      <Header title='Aprendendo React!'/>

      <Aluno nome="Luiz Guilherme" idade={20} />
      <Aluno nome="Luiz Gustavo" idade={21} />

      <Footer/>

    </div>
  )
}
