# Create React App [![Build Status](https://dev.azure.com/facebook/create-react-app/_apis/build/status/facebook.create-react-app?branchName=master)](https://dev.azure.com/facebook/create-react-app/_build/latest?definitionId=1&branchName=master) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/facebook/create-react-app/blob/master/CONTRIBUTING.md)

Create GraphQL APIs with no build configuration.

- [Creating an API](#creating-an-api) – How to create a new api.
- [User Guide](https://rafaelnsantos.github.io/create-graphql-api/) – How to develop APIs bootstrapped with Create GraphQL Express.

Create GraphQL API works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/rafaelnsantos/create-graphql-api/issues/new).<br>
If you have questions or need help, please ask in our [Discord](https://discord.gg/create-graphql-express) community.

## Quick Overview

```sh
npx create-graphql-express my-api
cd my-api
npm install
npm run dev
```

If you've previously installed `create-graphql-express` globally via `npm install -g create-graphql-express`, we recommend you uninstall the package using `npm uninstall -g create-graphql-express` to ensure that npx always uses the latest version.

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

Then open [http://localhost:3000/graphql](http://localhost:3000/graphql) to see GraphpiQL.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

<p align='center'>
<img src='https://user-images.githubusercontent.com/4512966/72631948-00a33500-3934-11ea-8261-902fbca316ef.gif' width='600' alt='npm start'>
</p>

### Get Started Immediately

You **don’t** need to install or configure tools like Typescript or Eslint.<br>
They are preconfigured and hidden so that you can focus on the code.

Create a project, and you’re good to go.

## Creating an API

**You’ll need to have Node 10.16.0 or later version on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### npx

```sh
npx create-graphql-express my-api
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

```sh
my-api
├── jest.config.js
├── package.json
├── src
|  ├── errors.ts
|  ├── generated
|  |  ├── schema.ts
|  |  └── types.d.ts
|  ├── graphql
|  |  ├── calculator
|  |  |  ├── calculateMutation.ts
|  |  |  └── calculator.graphql
|  |  ├── generated
|  |  |  ├── root.graphql
|  |  |  └── rootResolver.ts
|  |  ├── _directives
|  |  └── _scalars
|  ├── repositories
|  |  └── repositories.d.ts
|  ├── services
|  |  └── services.d.ts
|  └── utils
|     └── utils.d.ts
├── tests
|  ├── calculator.test.ts
|  └── config
|     ├── global.d.ts
|     ├── jest.env.ts
|     ├── jest.global.ts
|     └── jest.setup.ts
└── tsconfig.json
```

No configuration or complicated folder structures, only the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-api
```

Inside the newly created project, you can run some built-in commands:

### `npm run dev` or `yarn dev`

Runs the app in development mode.<br>
Open [http://localhost:3000/graphql](http://localhost:3000/graphql) to view it in the browser.

The API will automatically generate types from the graphql schema and reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

<!-- <p align='center'>
<img src='https://cdn.jsdelivr.net/gh/marionebl/create-react-app@9f6282671c54f0874afd37a72f6689727b562498/screencast-error.svg' width='600' alt='Build errors'>
</p> -->

### `npm test` or `yarn test`

Runs the functional tests.<br>

[Read more about testing.](https://rafaelnsantos.github.io/create-graphql-api/docs/running-tests)

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>

Your app is ready to be deployed.

## User Guide

You can find detailed instructions on using Create GraphQL API and many tips in [its documentation](https://rafaelnsantos.github.io/create-graphql-api/).

## How to Update to New Versions?

Please refer to the [User Guide](https://rafaelnsantos.github.io/create-graphql-api/docs/updating-to-new-releases) for this and other information.

## Philosophy

- **One Dependency:** There is only one build dependency. It uses schemaglue, schema-s2s, ESLint, and other amazing projects, but provides a cohesive curated experience on top of them.

- **No Configuration Required:** You don't need to configure anything. A reasonably good configuration of both development and production builds is handled for you so you can focus on writing code.

- **TODO: No Lock-In:** You can “eject” to a custom setup at any time. Run a single command, and all the configuration and build dependencies will be moved directly into your project, so you can pick up right where you left off.

## What’s Included?

Your environment will have everything you need to build a GraphQL API:

- ES6, TypeScript and syntax support.
- Auto generated types from GraphQL schema.
- Language extras beyond ES6 like the object spread operator.
- ESLint with Standard Style Guide and auto formatter.
- Functional test runner with built-in support for coverage reporting.
- A live development server that warns about common mistakes.
- An architecture that permits plugins.
- Hassle-free updates for the above tools with two dependencies(graphql-api-scripts and graphql-api-scripts-dev).

<!-- Check out [this guide](https://github.com/nitishdayal/cra_closer_look) for an overview of how these tools fit together. -->

The tradeoff is that **these tools are preconfigured to work in a specific way**. If your project needs more customization, you can(cannot yet) ["eject"](https://rafaelnsantos.github.io/create-graphql-api/docs/available-scripts#npm-run-eject) and customize it, but then you will need to maintain this configuration.

## Contributing

We'd love to have your helping hand on `create-graphql-api`! See [CONTRIBUTING.md](CONTRIBUTING.md) for more information on what we're looking for and how to get started.

## Acknowledgements

We are grateful to the authors of existing related projects for their ideas and collaboration:

- [@nicolasdao](https://github.com/nicolasdao)
- [@dotansimha](https://github.com/dotansimha)
- [@facebook](https://github.com/facebook)

## License

Create GraphQL Express is open source software [licensed as MIT](https://github.com/rafaelnsantos/create-graphql-api/blob/master/LICENSE).