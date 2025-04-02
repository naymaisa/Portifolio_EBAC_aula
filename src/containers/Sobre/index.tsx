import Title from "../../components/Title";
import Paragrafo from "../../components/Pragrafo";
import { GithubSecao } from "./styles";

const Sobre = ()=> (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="principal">
    Desenvolvedora Full Stack | Estudante de Java - EBAC
    </Paragrafo>
    <Paragrafo tipo="principal">
    Sou desenvolvedora Full Stack em formação, com experiência em Java, JavaScript e frameworks como Vue.js, Node.js, React e Express. Inicialmente graduada em Ciências Biomédicas Laboratoriais, fiz um intercâmbio em Portugal, onde realizei pesquisa científica e cursos de TI. Após retornar ao Brasil, me apaixonei pela tecnologia e desde então me dedico ao desenvolvimento.
    </Paragrafo>


  <GithubSecao>
  <img  src="https://github-readme-stats.vercel.app/api?username=naymaisa&amp;show_icons=true&amp;theme=dracula&amp;include_all_commits=true&amp;count_private=true" />
  <img  src="https://github-readme-stats.vercel.app/api/top-langs/?username=naymaisa&amp;layout=compact&amp;langs_count=7&amp;theme=dracula"/>
  </GithubSecao>
  </section>
)

export default Sobre
