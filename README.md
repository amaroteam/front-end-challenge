Amaro Demo
---

O demo foi construido usando React/Redux com Webpack e SASS

[![](https://travis-ci.org/gilbarbara/front-end-challenge.svg?branch=desafio-gil-barbara)](https://travis-ci.org/gilbarbara/front-end-challenge/)

### Instruções

```bash
npm install
npm start
```

E o build:
```bash
npm run build #into /dist
```

### Tests

Os unit tests usam Mocha/Expect. E Enzyme para React Components

```bash
npm test
```

Testes de automação usam Nightwatch/Selenium

```bash
npm test:ui #caso já esteja rodando o dev-server
npm start:test:ui #pra rodar o dev-server, passar o teste e fechar
```

### Code style

ESLint com styleguide do Airbnb.
```bash
npm run lint
```
