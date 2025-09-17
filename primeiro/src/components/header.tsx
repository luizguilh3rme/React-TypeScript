import './header.css'

interface HeaderProps{
    title?: string; //A "?" diz que esse atributo não é obrigatorio
}

/* colocando a frase para o titulo ja  nesse atributo de "title" aqui, é como se falasse assim para o código, se o campo de "title" 
não for preenchido no "App.tsx", coloque o que foi escrito no "title" daqui. */
export function Header({title = "Curso de React + TypeScript" }: HeaderProps){
    return(
        <header className="header">
            <h1 className="title">{title}</h1>

            <hr/>
        </header>
    )
}