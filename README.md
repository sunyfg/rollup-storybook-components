# Rollup + Storybook + React 组件库

# Getting started

### 安装依赖

```sh
npm install
```

### 本地开发

```sh
npm run start
```

### 单元测试

```sh
npm run test

# or

npm run test:coverage
```

### Linting

```sh
npm run lint

# or

npm run lint:fix
```

### 发布 NPM 包

```
npm run release
```

## Storybook

[Storybook](https://storybook.js.org/basics/writing-stories/) 文档.

### 部署 Storybook

```
npm run deploy
```

## Scripts

- `npm run start` : Only serves Storybook.
- `npm run build` : Builds your library (build can be found in `dist` folder).
- `npm run storybook:build` : Builds the static Storybook in case you want to deploy it.
- `npm run test` : Runs the tests.
- `npm run test:coverage`: Runs the test and shows the coverage.
- `npm run lint` : Runs the linter, Typescript typecheck and stylelint.
- `npm run lint:fix` : Runs the linter, Typescript typecheck and stylelint and fixes automatic fixable issues.
- `npm run eslint`: Runs only the JavaScript linter.
- `npm run eslint:fix`: Runs only the JavaScript linter and fixes automatic fixable issues.
- `npm run stylelint`: Runs only the style linter.
- `npm run stylelint:fix`: Runs only the style linter and fixes automatic fixable issues.
- `npm run check-types`: Runs typescript type checker.
- `npm run release` : Publishes your Library on NPM or your private Registry (depending on your config in your `.npmrc` file).
- `npm run deploy`: Deploys the Styleguide to GitHub Pages.

## 资源

### 构建

- [Rollup.js](https://rollupjs.org/guide/en)

### 代码格式化

- [Prettier](https://prettier.io/)

### Storybook

- [Storybook](https://storybook.js.org/)

### 单元测试

- [Enzyme](http://airbnb.io/enzyme/)
- [Jest](https://facebook.github.io/jest/)

### ESLint

- [ESLint](https://eslint.org/)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [stylelint-prettier](https://github.com/prettier/stylelint-prettier)
- [stylelint-scss](https://github.com/kristerkari/stylelint-scss)

### Compiler

- [Babel 7](https://babeljs.io/)
- [Typescript](https://www.typescriptlang.org/)
