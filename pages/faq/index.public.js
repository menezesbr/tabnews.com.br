import { Box, DefaultLayout, Heading, Viewer } from '@/TabNewsUI';

export default function Page() {
  const body = `Esta página existe para responder as dúvidas mais frequentes sobre o TabNews.

  <div id="como-funcionam-os-tabcoins"></div>

  ## Como funcionam os TabCoins?
  TabCoins são o ponto central do TabNews para estimular a geração de conteúdo de qualidade. Existem algumas maneiras diferentes de se ganhar TabCoins, mas todas envolvem a criação de conteúdo que foi avaliado positivamente por outros usuários.
  
  Para que um usuário possa avaliar publicações e comentários de outras pessoas, precisará gastar 2 TabCoins. Isso significa que, antes de avaliar publicações de outras pessoas, é preciso gerar valor criando uma boa publicação ou comentário.
  
  As formas de ganho de TabCoins são:
  
  - **Criando uma publicação ou comentário:** existe um algoritmo que leva em consideração os TabCoins das suas publicações mais recentes para definir quantos TabCoins você ganhará ao criar uma nova publicação. 
  - **Recebendo votos positivos:** quando outro usuário avalia positivamente seu conteúdo.
  - **Recompensa diária:** você pode ganhar TabCoins ao acessar o TabNews pelo menos uma vez no dia. Existe um algoritmo que leva em consideração as qualificações das suas publicações mais recentes e também a quantidade de TabCoins que você possui. Quanto melhor avaliadas forem suas publicações e menos TabCoins você possuir, mais receberá na recompensa diária.
  
  Seguindo o mesmo raciocínio, você pode perder TabCoins:
  
  - **Ao apagar uma publicação ou comentário:** você perderá os TabCoins que ganhou ao criar a publicação ou o comentário, caso tenha ganhado algum TabCoin, e também perderá os TabCoins que ganhou com as avaliações positivas nessa publicação. O mesmo vale para caso um moderador apague uma publicação sua.
  - **Recebendo votos negativos:** quando outro usuário avalia negativamente seu conteúdo.
  - **Ao avaliar uma publicação:** para avaliar publicações e comentários de outras pessoas, você precisará gastar 2 TabCoins.

  <div id="como-funciona-o-tabcash"></div>

  ## Como funciona o TabCash?
  O TabCash é uma moeda digital para recompensar pessoas que estão criando conteúdos com valor concreto e também ajudando a qualificar outros conteúdos. O saldo de TabCash poderá ser utilizado no sistema de Revenue Share, onde você poderá usar espaços de anúncio para compartilhar o que desejar, desde que respeite os [Termos de Uso](/termos-de-uso). Esse sistema ainda não está implementado, mas você pode [acompanhar o progresso no GitHub](https://github.com/filipedeschamps/tabnews.com.br/issues/1490). 

  A única forma de ganhar TabCash é avaliando uma publicação ou comentário de outras pessoa. Sempre que você avaliar algo, perderá 2 TabCoins e receberá 1 TabCash.

  <div id="que-tipo-de-conteudo-eu-posso-publicar-no-tabnews"></div>

  ## Que tipo de conteúdo eu posso publicar no TabNews?
  O TabNews nasceu com o objetivo de ser um local com **conteúdos de valor concreto para quem trabalha com tecnologia**. O TabNews não é uma rede social. Comentários simples (como _"valeu!"_) serão desestimulados em favor de comentários que devolvam algum valor concreto, usando TabCoins para qualificá-los negativamente e positivamente.

  O conteúdo publicado no TabNews deve estar diretamente relacionado à tecnologia. Podem ser notícias, artigos, tutoriais, indicações, curiosidades, sugestões de software e ferramentas, perguntas bem formuladas ou qualquer outro tipo de conteúdo que poderá fazer alguma diferença na vida de quem trabalha em áreas diretamente ou indiretamente relacionadas ao desenvolvimento de software.

  Conteúdos que estão diretamente relacionados à tecnologia, mas não possuem valor concreto, que são de baixa qualidade ou divulgam informações erradas, serão negativados por outros usuários por meio do uso das TabCoins como forma de desestimular esse tipo de conteúdo e garantir a qualidade do que está presente no TabNews.

  Conteúdos que não se encaixam nessa definição poderão ser removidos pela moderação do TabNews, conforme os [Termos de Uso](/termos-de-uso).

  <div id="posso-criar-publicacoes-divulgando-projetos-em-que-estou-envolvido"></div>

  ## Posso criar publicações divulgando projetos em que estou envolvido?
  Sim, uma explicação com detalhes técnicos e suas experiências na criação do projeto é muito bem-vinda. Para isso você deve colocar \`Pitch\` no título da publicação, por exemplo: \`Pitch: TabInvest — Um TabNews sobre investimentos\`.

  Uma apresentação de um projeto que você está envolvido deve seguir as mesmas regras de qualquer outra publicação: leia os [Termos de Uso](/termos-de-uso) e o tópico [Que tipo de conteúdo eu posso publicar no TabNews?](#user-content-que-tipo-de-conteudo-eu-posso-publicar-no-tabnews). Publicações com foco exclusivo comercial são expressamente proibidas.

  <div id="posso-publicar-o-mesmo-conteudo-varias-vezes"></div>

  ## Posso publicar o mesmo conteúdo várias vezes?
  Não. O TabNews não é um lugar para você publicar a mesma coisa repetidas vezes para ter mais atenção e receber mais TabCoins. Um conteúdo antigo, de meses ou anos, pode ser publicado como **um novo conteúdo**, e não uma cópia, porque o contexto é diferente e novas pessoas poderão ler a publicação.

  Lembre-se que toda publicação está sujeita à qualificação por outros usuários através do uso de TabCoins, e casos de abuso serão tratados pela moderação. Apagar um conteúdo avaliado negativamente e republicá-lo para tentar chamar mais atenção é um exemplo de **manipulação das qualificações** e poderá resultar no banimento permanente da sua conta, como dito nos [Termos de Uso](/termos-de-uso).

  <div id="nao-consigo-criar-novas-publicacoes-o-que-fazer"></div>

  ## Não consigo criar novas publicações. O que fazer?
  Se, ao criar uma nova publicação ou comentário, você recebe uma mensagem de erro dizendo que não é possível publicar porque há outras publicações mal avaliadas que ainda não foram excluídas, revise seus conteúdos mais recentes que estão negativados. Essa é uma proteção para o TabNews e para o usuário, impedindo a criação de muitas publicações mal recebidas e permitindo que o usuário analise o que está fazendo de errado e corrija seu comportamento.

  Ao encontrar suas publicações que estão qualificadas negativamente, você poderá apagar alguma e tentar criar a publicação que deseja. O TabNews avaliará suas publicações novamente para definir se você pode ou não criar uma nova publicação. Caso receba a mesma mensagem de erro, basta realizar o processo novamente.

  <div id="como-funciona-a-pagina-relevantes"></div>

  ## Como funciona a página "Relevantes"?
  A página [Relevantes](/) tem como objetivo exibir as publicações recentes que foram mais relevantes para os usuários do TabNews. O algoritmo leva em consideração diferentes fatores como: há quanto tempo a publicação foi feita, quão positivamente ela foi avaliada, se a comunidade engajou por meio de comentários etc.
  <div id="test"></div>

  <div id="onde-posso-fazer-sugestoes-e-ou-reportar-bugs"></div>

  ## Onde posso fazer sugestões e/ou reportar bugs?
  Para sugestões de melhorias ou para reportar bugs que não envolvem informações sensíveis ou falhas de segurança, você pode abrir um issue no [repositório do TabNews no GitHub](https://github.com/filipedeschamps/tabnews.com.br).

  Caso você descubra alguma falha, brecha ou vulnerabilidade de segurança e encontre **informações sensíveis** (por exemplo, dados privados de outros usuários, dados sensíveis do sistema ou acesso não autorizado), pedimos que entre em contato de forma privada através do email <a href="mailto:contato@tabnews.com.br">contato@tabnews.com.br</a>.

  Após o fechamento da falha, o TabNews se compromete em criar um Postmortem público com os detalhes do que aconteceu. Não temos interesse algum em esconder esses acontecimentos e queremos compartilhar todos os conhecimentos adquiridos e estratégias adotadas, mantendo em mente que iremos proteger ao máximo dados sensíveis dos usuários.

  <div id="como-posso-fazer-testes-no-site-do-tabnews"></div>

  ## Como posso fazer testes no site do TabNews?
  Testes das mais variadas formas devem ser feitos no ambiente de homologação. Você pode acessar a [lista de implantações](https://github.com/filipedeschamps/tabnews.com.br/deployments/activity_log?environment=Preview) e clicar em algum link da seção \`Active deployments\` para acessar o ambiente. Por ser um ambiente diferente, você precisará criar uma nova conta e confirmar o e-mail.
  
  <div id="como-posso-contribuir-com-o-tabnews"></div>

  ## Como posso contribuir com o TabNews?
  Existem diferentes formas de participação que contribuem para a evolução do TabNews:

  - **Criação de conteúdo:** você pode criar publicações ou comentários com conteúdo de valor para outros leitores.
  - **Qualificação de conteúdo:** você pode usar seus TabCoins para qualificar as publicações e comentários. Ao qualificar positivamente, você reforça que aquele tipo de conteúdo é relevante e desejado no TabNews. Ao qualificar negativamente, você demonstra que aquele conteúdo não é relevante ou possui algum problema.
  - **Participação no repositório:** as sugestões de melhorias e reportes de bugs são realizados no [repositório do TabNews no GitHub](https://github.com/filipedeschamps/tabnews.com.br). Você pode contribuir com detalhes para a resolução de algum problema ou com ideias de implementação de algum recurso.
  - **Modificações no código:** como o TabNews é um projeto de código aberto, além de sugerir melhorias e reportar bugs, você também pode contribuir com o código do projeto. Leia o [guia de contribuição](https://github.com/filipedeschamps/tabnews.com.br/blob/main/CONTRIBUTING.md) do projeto para mais detalhes.
`;

  return (
    <DefaultLayout metadata={{ title: 'FAQ - Perguntas frequentes' }}>
      <Box>
        <Heading as="h1">FAQ - Perguntas Frequentes</Heading>
        <Viewer value={body} />
      </Box>
    </DefaultLayout>
  );
}
