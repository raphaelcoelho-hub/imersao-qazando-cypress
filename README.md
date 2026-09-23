# Automação de Testes E2E com Cypress, Page Object Model (POM) e Inteligência Artificial

Repositório desenvolvido como parte da Imersão Próximo Nível, promovida pela Qazando nos dias 14 e 15 de setembro de 2026, demonstrando a aplicação prática de Engenharia de Qualidade de Software integrada à Inteligência Artificial, utilizando o VS Code com GitHub Copilot e Gemini para acelerar entregas com qualidade e robustez.

---

## Sobre a Imersão e o Propósito

Este projeto foi construído em um ambiente de desenvolvimento moderno, onde a Inteligência Artificial atuou como um copiloto estratégico de engenharia. Durante a imersão, exploramos como a IA pode auxiliar o profissional de QA em diferentes etapas do processo:

* **Geração e mapeamento:** tradução rápida de regras de negócio em cenários de teste abrangentes e estruturação inicial do código.
* **Curadoria e Code Review:** atuação crítica do QA na revisão das entregas geradas pela IA, identificando redundâncias, assertivas fracas e garantindo o foco no valor real de negócio.
* **Arquitetura escalável:** evolução da automação para o padrão Page Object Model (POM), proporcionando maior organização, manutenibilidade e desacoplamento do código de testes.

O sistema utilizado como alvo dos testes é o e-commerce de prática Automation Practice, com cobertura dos fluxos críticos de Login e Cadastro de Usuários.

---

## Tecnologias Utilizadas

<div align="center">

[![Cypress](https://img.shields.io/badge/Cypress-%2317202C.svg?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/features/actions)

</div>

### Detalhamento das Tecnologias
* **Cypress:** framework para automação de testes end-to-end em aplicações web.
* **JavaScript:** linguagem utilizada para desenvolvimento dos scripts de teste.
* **Page Object Model (POM):** padrão de projeto utilizado para separar a lógica de negócio dos elementos e ações das páginas.
* **Node.js:** ambiente de execução JavaScript utilizado para gerenciamento das dependências e execução do projeto.
* **Git:** sistema de controle de versão utilizado para gerenciamento do código-fonte.
* **GitHub Copilot e Gemini:** ferramentas de Inteligência Artificial utilizadas como apoio durante o desenvolvimento.

---

## Arquitetura Utilizada

### Page Object Model (POM)

O projeto utiliza o padrão **Page Object Model (POM)** para separar a lógica dos testes dos elementos e ações das páginas.

Essa abordagem proporciona:

* **Desacoplamento:** alterações nos seletores podem ser realizadas no arquivo correspondente à página, reduzindo o impacto nos testes.
* **Manutenibilidade:** centralização dos elementos e ações de cada página.
* **Legibilidade:** os arquivos de teste ficam mais limpos e focados no comportamento do usuário e nas regras de negócio.
* **Reutilização:** métodos e elementos podem ser utilizados por diferentes cenários de teste.

## Estrutura de Pastas

```text
automacao-pratica/
├── cypress/
│   ├── e2e/
│   │   ├── Pages/
│   │   │   ├── cadastro_usuario.page.js
│   │   │   └── login.page.js
│   │   ├── screenshots/
│   │   │   └── login.cy.js/
│   │   │       └── Testes de Login -- ...png
│   │   ├── cadastro_usuario.cy.js
│   │   └── login.cy.js
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md
```

## Funcionalidades Testadas e Regras de Negócio

### Login

Arquivos relacionados:

* `login.cy.js`
* `login.page.js`

Os seguintes cenários são contemplados:

#### Caminho Feliz

* Realização de login utilizando e-mail e senha válidos.
* Validação da mensagem de sucesso correspondente.

#### Validações Negativas e Campos Obrigatórios

* E-mail vazio.
* Senha vazia.
* E-mail e senha vazios simultaneamente.
* Formato de e-mail inválido.
* Senha inválida, considerando a restrição de tamanho mínimo.

### Cadastro de Usuário

Arquivos relacionados:

* `cadastro_usuario.cy.js`
* `cadastro_usuario.page.js`

Os seguintes cenários são contemplados:

#### Caminho Feliz

* Cadastro de um novo usuário preenchendo corretamente nome, e-mail e senha.
* Validação da mensagem de sucesso do cadastro.

#### Validações Negativas e Campos Obrigatórios

* Nome vazio.
* E-mail vazio.
* E-mail com formato inválido.
* Senha vazia.
* Senha com menos de 6 caracteres.
* Todos os campos vazios simultaneamente.

## Pré-requisitos

Antes de executar o projeto, certifique-se de possuir as seguintes ferramentas instaladas:

* [Node.js](https://nodejs.org/) — versão LTS recomendada.
* [Git](https://git-scm.com/).

## Como Instalar e Executar os Testes

### 1. Clonar o repositório

```bash
git clone https://github.com/raphaelcoelho-hub/imersao-qazando-cypress
cd automacao-pratica
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Executar o Cypress em modo interativo

```bash
npx cypress open
```

Na interface do Cypress:

1. Selecione **E2E Testing**.
2. Escolha o navegador de sua preferência.
3. Selecione o arquivo de teste que deseja executar.

### 4. Executar os testes em modo Headless

```bash
npx cypress run
```

## Boas Práticas Aplicadas

### Seletores

Os seletores utilizados no projeto foram identificados diretamente durante a inspeção dos elementos pela interface do Cypress.

Por se tratar de uma aplicação de prática, existem limitações na disponibilidade de atributos específicos e estáveis para todos os elementos. Dessa forma, foram utilizados os seletores disponíveis na aplicação, priorizando, sempre que possível, elementos com identificadores mais consistentes.

A escolha dos seletores também levou em consideração as características e limitações do sistema utilizado durante a imersão.

Em um projeto real, onde existe maior controle sobre a aplicação, seria recomendável trabalhar em conjunto com o time de desenvolvimento para disponibilizar atributos específicos para automação, como:

* `data-testid`
* `data-cy`
* outros identificadores estáveis e destinados à automação

Essa abordagem tende a tornar os testes mais resilientes a alterações na estrutura visual ou no HTML da aplicação.

### Resiliência

O projeto evita:

* comandos `cy.wait()` com tempos fixos;
* utilização desnecessária de `{ force: true }`.

A sincronização é realizada preferencialmente utilizando os mecanismos nativos de espera e sincronização do Cypress.

### Independência dos Testes

Os cenários foram projetados para serem executados de forma isolada, reduzindo a dependência entre os testes.

Quando necessário, são utilizados dados dinâmicos para evitar conflitos, como a geração de e-mails únicos durante os testes de cadastro.

## Inteligência Artificial no Processo de QA

Durante o desenvolvimento do projeto, ferramentas de Inteligência Artificial foram utilizadas como apoio ao processo de engenharia.

A IA foi aplicada principalmente para:

* auxiliar na geração inicial de cenários de teste;
* apoiar a estruturação do código;
* sugerir implementações;
* auxiliar na identificação de possíveis melhorias;
* apoiar o processo de revisão do código.

A utilização da IA não substitui a análise crítica do profissional de QA.

O papel do QA permanece fundamental para validar se os cenários realmente representam as regras de negócio, identificar testes desnecessários ou insuficientes e garantir a qualidade das entregas.

## Objetivo do Projeto

O objetivo deste projeto é demonstrar, de forma prática, a aplicação de conceitos de automação de testes E2E utilizando Cypress, JavaScript e Page Object Model, combinados com ferramentas de Inteligência Artificial como apoio ao desenvolvimento.

Além da implementação técnica, o projeto busca demonstrar a importância da atuação do QA na definição de cenários, análise de riscos, validação das regras de negócio e revisão crítica do código gerado ou apoiado por IA.

## Autor

**Raphael D'Assuncao Coelho**

QA Engineer & Analista de Implantação de Sistemas

Certificação obtida através da **Imersão Próximo Nível - Qazando**, em setembro de 2026.

