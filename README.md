<p align="center">
  <img width="300px" src="/logo.png">
</p>

<h1 align="center">Number Sequence</h1>

<p align="center">A Delightful Demo</p>

<p align="center">
  <a aria-label="npm package" href="https://www.npmjs.com/package/number-sequence-client">
    <img alt="" src="https://img.shields.io/npm/v/number-sequence-client.svg">
  </a>

  <a aria-label="travis build" href="https://travis-ci.org/mts/number-sequence">
    <img alt="" src="https://img.shields.io/travis/mts/number-sequence.svg?logo=travis">
  </a>

  <a aria-label="downloads" href="http://npm-stat.com/charts.html?package=number-sequence-client&from=2018-10-13">
    <img alt="" src="https://img.shields.io/npm/dm/number-sequence-client.svg">
  </a>

  <a aria-label="last commit" href="https://github.com/mts/number-sequence/commits/master">
    <img alt="" src="https://img.shields.io/github/last-commit/mts/number-sequence.svg">
  </a>

  <a aria-label="contributors graph" href="https://github.com/mts/number-sequence/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/mts/number-sequence.svg">
  </a>

  <a aria-label="license" href="https://github.com/mts/number-sequence/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mts/number-sequence.svg" alt="">
  </a>
</p>

> Display mumber sequences

## Features

- Displays the following 5 number sequences by default
```
  [1]
  [1, 1]
  [1, 2, 1]
  [1, 3, 3, 1]
  [1, 4, 6, 4, 1]
```
- Display the following 10 number sequences afterwards
```
  [1, 5, 10, 10, 5, 1]
  [1, 6, 15, 20, 15, 6, 1]
  [1, 7, 21, 35, 35, 21, 7, 1]
  [1, 8, 28, 56, 70, 56, 28, 8, 1]
  [1, 9, 36, 84, 126, 126, 84, 36, 9, 1]
  [1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1]
  [1, 11, 55, 165, 330, 462, 462, 330, 165, 55, 11, 1]
  [1, 12, 66, 220, 495, 792, 924, 792, 495, 220, 66, 12, 1]
  [1, 13, 78, 286, 715, 1287, 1716, 1716, 1287, 715, 286, 78, 13, 1]
  [1, 14, 91, 364, 1001, 2002, 3003, 3432, 3003, 2002, 1001, 364, 91, 14, 1]
```

## Stack & patterns
- Number Sequences application
  - Lives in a [Lerna](https://github.com/lerna/lerna) mono-repo
  - Implements an [Apollo GraphQL Client](https://github.com/apollographql/apollo-client) and an [Apollo GraphQL Server](https://github.com/apollographql/apollo-server)
  - Uses [Apollo Engine](https://engine.apollographql.com/) as cloud service for schema management
  - Renders UI using [ReactJS](https://github.com/facebook/react)
  - Implements client routing using [React Router](https://github.com/ReactTraining/react-router)
  - Uses [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) implementing UI components as atoms, molecules, organisms, templates and pages
  - Queries server as well as client data using [GraphQL](https://graphql.org/)
  - Integrates [ReactJS](https://github.com/facebook/react) with [Apollo GraphQL Client](https://github.com/apollographql/apollo-client) using [React Apollo](https://github.com/apollographql/react-apollo)
  - Styles using [Primer](https://github.com/primer/primer)
  - Lints using [ESLint](https://github.com/eslint/eslint) and [StyleLint](https://github.com/stylelint/stylelint)
  - Runs linters on git staged files using [Lint Staged](https://github.com/okonet/lint-staged)
  - Prettifies using [Prettier](https://github.com/prettier/prettier)
  - Implements unit and snapshot tests using [Jest](https://jestjs.io/), [Enzyme](https://github.com/airbnb/enzyme) and [React Test Renderer](https://github.com/facebook/react/tree/master/packages/react-test-renderer)
  - Implements Git hooks using [Husky](https://github.com/typicode/husky)
  - Compiles JavaScript and CSS bundles using [Webpack](https://github.com/webpack/webpack) and [Babel](https://github.com/babel/babel)
  - Allows local development using [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
  - Publishes [client package](https://www.npmjs.com/package/number-sequence-client) and [server package](https://www.npmjs.com/package/number-sequence-server) to [NPM](https://www.npmjs.com/)
  - Builds using [Travis-CI](https://travis-ci.org/mts/number-sequence)
  - Deploys client app to [GitHub pages](https://mts.github.io/number-sequence/) and server app to [Heroku](https://dashboard.heroku.com/apps/number-sequence-server)

## Available Scripts
- `build`: Runs the `build` script for each package in the lerna mono-repo
- `release`: Publishes all packages to NPM
- `uninstall-packages`: Runs the `uninstall-packages` script for each package in the lerna mono-repo
- `install-packages`: Runs the `install-packages` script for each package in the lerna mono-repo
- `reinstall-packages`: Runs the `reinstall-packages` script for each package in the lerna mono-repo
- `heroku-prebuild`: Heroku runs this script before installing dependencies
- `start`: Runs the `start` script for each package in the lerna mono-repo. Heroku runs this script to start the Apollo GraphQL Server
- `heroku-postbuild`: Heroku runs this script installing all dependencies of each package in the lerna mono-repo
- `deploy-client`: Deploys `packages/client/build` as a static website to GitHub pages
- `deploy`: Run `build` script for each package building the server and the client. Deploys client to GitHub Pages afterwards
- `test`: Runs the `test` script for each package in the lerna mono-repo
- `prettier-js-init`: Prettifies all JavaScript using Prettier
- `pretty-quick`: Prettifies all JavaScript using pretty-quick
- `eslint-js-init`: Initiates EsLint configuration
- `lint`: Runs the `lint` script for each package in the lerna mono-repo
- `ci`: Runs the "ci" script for each package in the lerna mono-repo

## Environment variables

### Client App
- env.develop when building with webpack-dev-server for development
  ENGINE_API_KEY=<APOLLO ENGINE API KEY>
  SERVER_URL=http://localhost:4000/graphql

- env.release when building with webpack for production
  BASE_URL=/number-sequence
  ENGINE_API_KEY=<APOLLO ENGINE API KEY>
  SERVER_URL=https://number-sequence-server.herokuapp.com/graphql

### Server App
- .env
  ENGINE_API_KEY=<APOLLO ENGINE API KEY>

## Components

### Atoms

#### Atoms > Action > Button
- `Button` is a
  stateless function component
  receiving `onClick, children` props
`rendering`
  a button element.

```javascript
  <Button onClick={() => {}}>some text</Button>
```

#### Atoms > Box > Sequence
- `Sequence` is a
  stateless function component
  receiving `children` props
`rendering`
  its children.

```javascript
  <Sequence>5</Sequence>
```

#### Atoms > error > ErrorBoundary
- `ErrorBoundary` is a
  stateful class component
  receiving `children` props
`rendering`
  a fallback UI in case a JavaScript error is caught and
  it's children if not.

```javascript
  <ErrorBoundary>
    <SomeComponent />
  </ErrorBoundary>
```

### Molecules

#### Molecules > Banner > HeroBanner

#### Molecules > Card > SequenceCard

#### Molecules > Navigation > Header

#### Molecules > Navigation > SideBar


### Organisms

#### There are no organisms

### Templates

#### Templates > DemoTemplate

#### Templates > StartTemplate

### Pages

#### Pages > DemoPage

#### Pages > StartPage


## Client
- Apollo GraphQL Client running at https://mts.github.io/number-sequence/

## Server
- Apollo GraphQL Server running at https://number-sequence-server.herokuapp.com/

## License

[MIT](./LICENSE) &copy; [MTS](https://github.com/mts)
