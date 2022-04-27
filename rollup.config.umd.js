import { DEFAULT_EXTENSIONS } from '@babel/core';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
// import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import { terser } from 'rollup-plugin-terser';
import typescriptEngine from 'typescript';
import pkg from './package.json';

const config = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.unpkg,
      format: 'umd',
      name: 'gw_components',
      sourcemap: true,
      exports: 'named',
    },
  ],
  external: ['react'],
  plugins: [
    postcss({
      plugins: [],
      minimize: true,
    }),
    // external({
    //   includeDependencies: true,
    // }),
    typescript({
      typescript: typescriptEngine,
      include: ['*.js+(|x)', '**/*.js+(|x)'],
      exclude: ['coverage', 'config', 'dist', 'node_modules/**', '*.test.{js+(|x), ts+(|x)}', '**/*.test.{js+(|x), ts+(|x)}'],
    }),
    commonjs(),
    babel({
      extensions: [...DEFAULT_EXTENSIONS, '.ts', 'tsx'],
      babelHelpers: 'runtime',
      exclude: /node_modules/,
    }),
    url(),
    svgr(),
    resolve(),
    terser(),
  ],
};

export default config;
