import Avatar from "../../components/Avatar"
import Title from "../../components/Title"
import Pragrafo from "../../components/Pragrafo"

import {Descricao, BotaoTema, SidebarContainer} from'./styles'


//adicionar no sidebar link para email e outras redes sociais(e outras coias se quiser)
const Sidebar = ()=> (
  <aside>
    <SidebarContainer>
    <Avatar/>
    <Title fontSize={20}>Nayara Maisa</Title>
    <Pragrafo tipo="secundario" fontSize={16}>naymaisa</Pragrafo>
    <Descricao tipo="principal" fontSize={12}>Desenvolvadora Full Stack</Descricao>
    <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
