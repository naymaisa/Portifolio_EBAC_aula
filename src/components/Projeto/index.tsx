

import Pragrafo from "../Pragrafo"
import Title from "../Title"
import {Card, LinkBotao, CardModal} from "./styles"


const ProjetoToDo = () =>{
return(
  <Card>
  <Title>Lista de Tarefas (To-Do List) e API com Integração com Banco de Dados</Title>
  <Pragrafo tipo="secundario">
  Desenvolvimento de uma lista de tarefas (To-Do List) com uma API que integra com o banco de dados,
  permitindo salvar e excluir tarefas. Utilizando Vue.js no frontend, Node.js no backend e MongoDB no banco de dados, criando uma integração completa entre as camadas da aplicação.
  </Pragrafo>
  <LinkBotao href="https://github.com/naymaisa/ToDoList">Visualizar
  <CardModal className="card-modal">
  <img src="/images/todolist.png" alt="Imagem do Projeto" />
        </CardModal></LinkBotao>
</Card>
)
}

const ProjetoLoja = () =>{
  return(
    <Card>
    <Title>
    Landing Page para uma Livraria</Title>
    <Pragrafo tipo="secundario">
    Desenvolvimento de uma landing page para uma livraria.
Utilizando HTML, CSS, JavaScript e Bootstrap, foi criado um site para a livraria.
<br />
<br />
<br />
<br />
    </Pragrafo>
    <LinkBotao href="https://livraria-bs.vercel.app/">Visualizar
    <CardModal className="card-modal">
    <img src="/images/biblioteca.png" alt="Imagem do Projeto" />
          </CardModal></LinkBotao>
  </Card>
  )
  }

export  {ProjetoToDo, ProjetoLoja}
