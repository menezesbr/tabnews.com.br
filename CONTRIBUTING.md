# Contribuindo com o TabNews

Primeiramente, agradecemos por dedicar seu tempo para contribuir com o projeto! 🎉

A seguir, temos um guia para te ajudar a contribuir com o TabNews através de _issues_ e _pull requests_. Se você ficar com alguma dúvida sobre o processo, [faça uma pergunta](https://github.com/filipedeschamps/tabnews.com.br/issues/new?labels=dúvida&projects=&template=3_question.yml) na parte de issues deste repositório.

**Tabela de conteúdo**

- [Sugerir novos recursos ou reportar bugs](#sugerir-novos-recursos-ou-reportar-bugs)
- [Contribuir com código](#contribuir-com-código)
  - [Criar uma branch](#criar-uma-branch)
  - [Dependências globais](#dependências-globais)
  - [Dependências locais](#dependências-locais)
  - [Rodar o projeto](#rodar-o-projeto)
  - [Cadastro e Login de usuários](#cadastro-e-login-de-usuários)
    - [Criar um usuário manualmente](#criar-um-usuário-manualmente)
    - [Utilizar usuários pré-cadastrados](#utilizar-usuários-pré-cadastrados)
  - [Rodar os testes](#rodar-os-testes)
  - [Rodar o lint do código](#rodar-o-lint-do-código)
  - [Criar novas Migrations](#criar-novas-migrations)
  - [Commit das alterações](#commit-das-alterações)
  - [Abrir o Pull Request (PR)](#abrir-o-pull-request-pr)
  - [Próximas contribuições](#próximas-contribuições)
- [Interagir no repositório](#interagir-no-repositório)

## Sugerir novos recursos ou reportar bugs

Se você tem alguma sugestão de novo recurso ou deseja reportar um bug que encontrou no site ou na API, você pode abrir um [issue](https://github.com/filipedeschamps/tabnews.com.br/issues/new/choose) no repositório e escolher o template mais adequado. Cada template possui um formulário que irá te auxiliar a fornecer as informações necessárias. O título e a descrição do issue devem estar em português.

Caso você queira reportar uma falha de segurança, pedimos que entre em contato através do email <a href="mailto:contato@tabnews.com.br">contato@tabnews.com.br</a> ou [reporte de forma privada pelo GitHub](https://github.com/filipedeschamps/tabnews.com.br/security/advisories/new).

## Contribuir com código

Se o problema que você quer resolver ainda não estiver documentado em um issue, então [leia o tópico anterior](#sugerir-novos-recursos-ou-reportar-bugs) e primeiro exponha o problema, depois proponha a solução (no próprio issue e sem preocupação com a implementação). Isso evitará que você invista seu tempo realizando uma modificação no código que não será aceita por não ser algo desejado ou que ainda não foi bem definido como deveria funcionar.

Se você está procurando alguma coisa para desenvolver como sendo a sua primeira interação com o código do repositório, você pode procurar por [issues com o label _"good first issue"_](https://github.com/filipedeschamps/tabnews.com.br/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22), que são tarefas mais fáceis e simples, ideais para quem nunca interagiu com o código do TabNews ou quem nunca fez uma contribuição para um projeto de código aberto.

As alterações no código devem estar em inglês (nomes de funções, variáveis etc.) e seguir o padrão do projeto. Nos tópicos abaixo você será guiado com orientações que facilitarão a aceitação das suas modificações.

### Criar uma branch

O primeiro passo para conseguir desenvolver algo é criar a sua própria branch. Isso será necessário para fazer uma requisição para adicionar o seu código ao repositório do TabNews.

Para isso, você pode [criar um fork](https://github.com/filipedeschamps/tabnews.com.br/fork) pelo próprio site do GitHub e seguir as orientações. O fork é uma cópia e permite que você experimente alterações sem afetar o repositório original.

Com o fork criado, você pode [clonar o seu repositório](https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository) na sua máquina local. Para fazer isso pela linha de comando, você precisará alterar e usar um dos comandos abaixo:

```bash
git clone https://github.com/seu-usuario/tabnews.com.br.git
# ou
git clone git@github.com:seu-usuario/tabnews.com.br.git
```

Tendo o repositório na sua máquina, você pode criar uma branch para realizar as alterações:

```bash
git switch -c nome-da-branch
```

### Dependências globais

Você precisa ter duas principais dependências instaladas:

- Node.js LTS v18 (ou qualquer versão superior)
- Docker Engine v17.12.0 com Docker Compose v1.24.1 (ou qualquer versão superior)

Utiliza `nvm`? Então pode executar `nvm install` na pasta do projeto para instalar e utilizar a versão mais apropriada do Node.js.

### Dependências locais

Com o repositório clonado e as dependências globais instaladas, você pode instalar as dependências locais do projeto:

```bash
npm install
```

### Rodar o projeto

Para rodar o projeto localmente, basta executar o comando abaixo:

```bash
npm run dev
```

Isto irá subir serviços como Banco de Dados (incluindo as Migrations), Servidor de Email e irá expor um Serviço Web (Frontend e API) no seguinte endereço:

```bash
http://localhost:3000/
http://localhost:3000/api/v1/status
```

Observações:

- Para derrubar todos os serviços, basta utilizar as teclas `CTRL+C`, que é o padrão dos terminais para encerrar processos.
- Você pode conferir o endereço dos outros serviços dentro do arquivo [`.env`](./.env) encontrado na raiz do projeto, como por exemplo o endereço e credenciais do Banco de Dados local ou o Frontend do Serviço de Email.

### Cadastro e Login de usuários

No ambiente de desenvolvimento você poderá tanto criar usuários manualmente (inclusive para receber e testar o email de ativação), quanto utilizar usuários pré-cadastrados e que já foram ativados para sua conveniência.

#### Criar um usuário manualmente

1. Após subir os serviços, acesse http://localhost:3000/cadastro.
2. Preencha os dados e utilize **qualquer email** com formato válido, mesmo que esse email não exista, por exemplo: `teste@teste.com`.
3. O backend irá enviar um email para o servidor **local** de emails e que pode ser acessado pelo endereço http://localhost:1080/.
4. Abra o email de Ativação e acesse o link para ativar sua conta de fato.
5. Com a conta ativa, realize o login: http://localhost:3000/login.

#### Utilizar usuários pré-cadastrados

Por padrão, ao rodar o comando `npm run dev` será injetado dois usuários ativados, um com features padrões e outro com features administrativas, como a habilidade de rodar as Migrations usando a API ou alterar o conteúdo de outros usuários. Segue abaixo as credenciais destes dois usuários (`"email"` + `"senha"`):

- **Usuário Admin**: `"admin@admin.com"` + `"password"`
- **Usuário padrão**: `"user@user.com"` + `"password"`

### Rodar os testes

Antes de fazer qualquer alteração no projeto, primeiro você deve rodar os testes de forma geral para se certificar de que tudo está passando como esperado. Isso irá garantir que você instalou tudo corretamente e pode começar a modificar o código. O comando abaixo irá rodar todos os serviços necessários, rodar os testes e em seguida derrubar todos os serviços.

```bash
npm test
```

Caso queira manter os serviços e testes rodando enquanto desenvolve (e rodando novamente a cada alteração salva), use o comando abaixo:

```bash
npm run test:watch:services
```

Os logs do Serviço Web e Jest (dos testes) irão se misturar, então caso queira rodar eles de forma separada, abra dois terminais separados e rode o seguinte:

```bash
# Terminal 1
npm run dev

# Terminal 2
npm run test:watch
```

Caso não queira dar `watch` em todos os testes e queira isolar arquivos específicos de teste, você pode utilizar uma expressão regular (`regex`) para dar `match` no que quiser. Não é necessário digitar o caminho inteiro para o arquivo, veja alguns exemplos abaixo:

```bash
# Rodar todos os testes de "users" da api "v1"
npm run test:watch -- v1/users/

# Rodar apenas o arquivo tests/integration/api/v1/_use-cases/registration-flow.test.js
npm run test:watch -- registration-flow

# Rodar apenas o arquivo tests/integration/api/v1/contents/[username]/patch.test.js
npm run test:watch -- username./patch

# Rodar apenas o arquivo tests/integration/api/v1/contents/[username]/[slug]/get.test.js
npm run test:watch -- contents/.username./.slug./get
```

Observações:

- A forma como é tratado o caminho dos arquivos pode mudar dependendo do seu sistema operacional.
- A forma como o seu terminal interpreta caracteres especiais como `/` ou `[` pode mudar, mas você poderá usar uma expressão regular para evitar usar esses caracteres, como por exemplo utilizar o `.` que representa o `match` com qualquer caractere. Isto foi utilizado nos exemplos acima para evitar os caracteres `[` e `]` dos arquivos.

### Rodar o lint do código

Além dos testes passarem, o seu código deve estar de acordo com o padrão do projeto. Para verificar se existe algum erro de lint, você pode usar o comando:

```
npm run lint
```

Alguns erros podem ser corrigidos automaticamente usando o comando abaixo, mas outros precisarão ser corrigidos de forma manual.

```
npm run lint:fix
```

Este processo será realizado automaticamente quando você commitar suas alterações.

### Criar novas Migrations

Se você está desenvolvendo algo que envolve uma alteração no banco de dados, você pode utilizar o script `migration:create` para criar uma nova migração, por exemplo:

```
npm run migration:create alter table users add tabcoins
```

Isto irá resultar em:

```
Created migration -- ./infra/migrations/1655399502254_alter-table-users-add-tabcoins.js
```

Caso esta nova migração esteja válida, ela será automaticamente executada na próxima vez que você rodar o comando `npm run dev`. Caso contrário, o serviço não irá subir e os logs de erro estarão registrados no arquivo `migrations.log`, encontrado na raiz do projeto.

### Commit das alterações

Após finalizar suas alterações e se certificar que todos os testes estão passando com o comando geral `npm test`, chegou a hora de fazer o commit das suas alterações.

Para ser auxiliado no padrão de commit que utilizamos, rode o comando abaixo e siga as instruções. A mensagem de commit deve estar em inglês.

```bash
npm run commit
```

Depois você pode realizar o `git push` para que a sua branch apareça no seu repositório remoto do GitHub.

### Abrir o Pull Request (PR)

Com a sua branch no seu fork contendo todas as modificações necessárias, chegou a hora de solicitar a adição do seu código ao repositório principal. Para isso, você pode acessar a página de [Pull Requests](https://github.com/filipedeschamps/tabnews.com.br/pulls) do repositório principal e criar o seu pull request.

Caso você tenha feito um `git push` recentemente, o próprio GitHub irá sugerir criar o PR para a branch que você estava desenvolvendo. Do contrário, você poderá [criar um novo Pull Request](https://github.com/filipedeschamps/tabnews.com.br/compare) selecionando como `base` a branch `main`, e escolhendo como `compare` a branch do seu repositório.

Durante a criação do seu pull request, você perceberá que a descrição está pré-preenchida com comentários. Esses comentários servem para te guiar a criar a descrição adequada, contendo as modificações realizadas no código e qual o impacto delas. Isso irá facilitar a revisão do PR por colaboradores do repositório. O título e a descrição do PR devem estar em português.

Uma vez que você tenha criado o PR, você poderá ver se ele passou nas verificações remotas. Essas verificações incluem a execução dos testes, o lint do código e o lint dos commits para confirmar que nenhum teste está quebrado e que o código e os commits estão seguindo o padrão do projeto. Se você percebeu que algo está errado, pode corrigir localmente e realizar um novo `npm run commit` e `git push`.

Caso tudo esteja passando, basta aguardar a revisão do código por outros colaboradores do projeto. Depois de revisado, você pode precisar realizar alguma modificação. Durante o processo de revisão, um contribuidor oficial do repositório poderá liberar a implantação na Vercel para criar uma versão no ambiente de homologação com o código do seu PR, gerando um link exclusivo para esse ambiente.

Quando as revisões forem feita e aceitarem seu código, ele poderá ser mergeado por um contribuidor oficial do repositório, e então as suas modificações estarão rodando em produção 🎉. Além disso, você entrará para a [lista de contribuidores](https://github.com/filipedeschamps/tabnews.com.br/graphs/contributors), aparecerá no [README.md](https://github.com/filipedeschamps/tabnews.com.br#contribuidores) e também na página de [Status](https://www.tabnews.com.br/status) no site do TabNews.

### Próximas contribuições

Caso deseje contribuir novamente, você deverá seguir os mesmos passos, mas lembre-se de [manter seu fork atualizado](https://docs.github.com/pt/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) para conseguir realizar as modificações sem conflito de código.

## Interagir no repositório

Outra forma de colaborar com o repositório é interagindo nos issues e nos pull requests. Se você leu este documento até aqui, sabe como funciona todo o processo de contribuição para criação de novas sugestões, reportes de bugs, reportes de problemas de segurança e contribuições com modificações de código, então está apto para participar de tudo isso através de comentários.

Viu alguma sugestão interessante que você deseja complementar, apontar um problema, ou dar uma ideia de como poderia ser a interface a ser implementada? Crie um comentário e complemente a discussão com o seu ponto de vista! Você pode estar enxergando algo que outras pessoas ainda não enxergaram.

Mesmo não sendo um contribuidor oficial do repositório, você também pode revisar os pull requests, apontando erros que encontrou enquanto lia o código ou testava a implementação. Isso ajudará quem criou o PR e a pessoa que for avaliar o código antes de realizar o merge, possibilitando um processo de integração mais rápido.
