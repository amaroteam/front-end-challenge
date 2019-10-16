# Amaro - Front-end test

## Descrição

Projeto de front-end para o desafio Amaro;
O projeto atende os requisitos básicos e extras do desafio.
O projeto foi hospedado usando [now](https://zeit.co/) na url [https://front-end-challenge.kopplin.now.sh/](https://front-end-challenge.kopplin.now.sh/)

## Tecnologias

- react;
- redux;
- styled-components;
- axios
- storybook
- jest;
- cypress;
- eslint;
- prettier;

- outras;

## Requisitos para rodar

- [Node](https://nodejs.org/en/docs/);
- [Yarn](https://yarnpkg.com/lang/en/);

## Instalando e rodando a aplicação

- clonar o seguinte [repositório](https://github.com/sergiokopplin/front-end-challenge);
- rodar os comandos a seguir;

```
$ yarn install
$ yarn start
```

Isso rodará a aplicação na porta 3000. Você poderá acessar em [localhost](http://localhost:3000);

## Rodando os testes

```
# unitários
$ yarn run test

# funcionais
$ yarn run functional-test:run
```

Caso queira abrir o teste funcional no cypress, rode:

```
# inicia aplicação
$ yarn run start

# abre o cypress
$ yarn run functional-test:open
```

## Storybook

```
# uma biblioteca de components foi criada, rode o comando para acessar
$ yarn run storybook
```

Isso rodará a aplicação na porta 9009. Você poderá acessar em [localhost](http://localhost:9009);
