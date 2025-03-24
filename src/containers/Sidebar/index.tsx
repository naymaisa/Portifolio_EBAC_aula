import Avatar from "../../components/Avatar"
import Title from "../../components/Title"
import Pragrafo from "../../components/Pragrafo"

import {Descricao, BotaoTema, SidebarContainer} from'./styles'

type Props ={
  trocaTema: () => void;
}

//adicionar no sidebar link para email e outras redes sociais(e outras coias se quiser)
const Sidebar = (props :Props)=> (
  <aside>
    <SidebarContainer>
    <Avatar/>
    <Title fontSize={20}>Nayara Maisa</Title>
    <Pragrafo tipo="secundario" fontSize={16}>naymaisa</Pragrafo>
    <Descricao tipo="principal" fontSize={12}>Desenvolvadora Full Stack</Descricao>
    <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
