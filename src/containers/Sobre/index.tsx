import { P } from '../../components/Paragrafo/styles'
import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <>
    <section>
      <Titulo fontSize={16}>Sobre mim</Titulo>
      <P tipo="principal">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        unde unde unde unde unde voluptate amet rerum inventore blanditiis culpa
        consectetur mollitia, illo natus ipsam dolor veritatis delectus
        molestias magni, odio dolorem doloremque sunt?
      </P>
    </section>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=julio-cesar-gomes&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=julio-cesar-gomes&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </>
)

export default Sobre
