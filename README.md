# Reddit Insights

> Desafio Front-end Winnin

## Link em produção

https://redditinsights.netlify.app/

## Instalação local

Para executar esse projeto em sua máquina siga os passos abaixo

```bash
# clone o projeto
git clone https://github.com/Ferbmp/RedditInsights.git

# entre na pasta raiz
cd RedditInsights

# instale as dependências
yarn

# execute um servidor de desenvolvimento
yarn start
```

## Ferramentas usadas

- [`react`](https://pt-br.reactjs.org/) - para controle de estado e criação de interfaces graficas

- [`styled-components`](https://styled-components.com/) - para trabalhar com `css-in-js`

- [`cypress`](https://www.cypress.io/) - para testes de integração

- [`framer-motion`](https://www.framer.com/motion/) - para animações

- [`date-fns`](https://date-fns.org/) - para manipulações de data

## Estrutura de pastas

```
📦
 ┣ 📂cypress  -> arquivos relacionados a testes e2e
 📦cypress
 ┣ 📂integration  -> teste de integração
```

```
 ┣ 📂src    -> código fonte do projeto
📦src
 ┣ 📂components  -> componentes react
 ┣ 📂context     -> arquivos de contexto
 ┣ 📂hooks       -> react hooks globais
 ┣ 📂pages       -> páginas
 ┣ 📂services    -> funções utilitárias
```

## Testes

Para executar testes e2e, siga a instrução a abaixo

```bash

yarn test

```
