import Title from "../../components/Title";
import Paragrafo from "../../components/Pragrafo";
import { GithubSecao } from "./styles";

const Sobre = ()=> (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, officia aspernatur fuga accusantium ullam ad corporis at voluptatibus quis blanditiis, exercitationem quod. Omnis nostrum suscipit illum dolorum facilis reprehenderit saepe.
    </Paragrafo>


  <GithubSecao>
  <img  src="https://github-readme-stats.vercel.app/api?username=naymaisa&amp;show_icons=true&amp;theme=dracula&amp;include_all_commits=true&amp;count_private=true" />
  <img  src="https://github-readme-stats.vercel.app/api/top-langs/?username=naymaisa&amp;layout=compact&amp;langs_count=7&amp;theme=dracula"/>
  </GithubSecao>
  </section>
)

export default Sobre
