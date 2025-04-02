import  {ProjetoToDo, ProjetoLoja } from "../../components/Projeto";
import Title from "../../components/Title";

import{ Lista } from './styles'

const Projetos = ()=>(
  <section>
    <Title fontSize={16}> Projetos</Title>
    <Lista>
      <li>
        <ProjetoToDo/>
      </li>
      <li>
        <ProjetoLoja/>
      </li>

    </Lista>
  </section>
)

export default Projetos
