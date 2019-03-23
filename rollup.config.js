import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

let pkg = require('./package.json')
let external = Object.keys(pkg.dependencies)
let plugins = [resolve(), babel({ exclude: 'node_modules/**' }), commonjs(), terser()]

export default [
  {
    external,
    input: 'src/index.js',
    plugins,
    output: [
      {
        file: 'dist/client-i18n.js',
        name: 'client_i18n',
        format: 'umd',
        sourcemap: true
      }
    ]
  },
  {
    external,
    input: 'src/index.js',
    plugins,
    output: [
      {
        file: 'dist/client-i18n.mjs',
        format: 'esm',
        sourcemap: true
      }
    ]
  }
]
