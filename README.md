# Desafio Go Go Live

Aplicativo em React Native, com menu de navageção e conteúdo das páginas, dinâmico.

- React Native - App
- Nest.js - Service

# Features

- Navegação
- Visualização dos posts

### Tecnologias

- [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces
- [React Native](https://reactnative.dev/) - Create native apps for Android and iOS using React
- [Nest.js](https://nestjs.com/) - A progressive Node.js framework for building efficient, reliable and scalable server-side applications

### Instalação

#### - Service

Requer [Node.js](https://nodejs.org/) e [Nest.js](https://nestjs.com/) para funcionar.

Instale as dependências e devDependencies e inicie o servidor

```sh
$ cd service
$ npm install OR yarn
$ yarn start:dev
```

#### - App

Requer [Node.js](https://nodejs.org/) e [React Native](https://reactnative.dev/) para funcionar.

Instale as dependências e devDependencies e inicie o servidor

```sh
$ cd app
$ npm install OR yarn
$ react-native run-android
$ adb reverse tcp:3000 tcp:3000
```

## License

MIT

**Free Software!**
