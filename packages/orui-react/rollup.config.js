import typescript from 'rollup-plugin-typescript2';
import less from 'rollup-plugin-less';
import clear from 'rollup-plugin-clear';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { uglify } from 'rollup-plugin-uglify';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

export default {
  input: ['./src/index.ts'],
  output: [
    {
      file: 'web-react-mobile/cjs.js',
      format: 'cjs',
      name: 'cjs.js',
    },
    {
      file: 'web-react-mobile/umd.js',
      format: 'umd',
      name: 'umd.js',
    },
    {
      file: 'web-react-mobile/index.js',
      format: 'es',
      name: 'index.js',
    },
  ],
  plugins: [
    typescript(),
    less({ output: './web-react-mobile/style/index.css' }),
    clear({
      targets: ['web-react'],
    }),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      // [
      //   // 'node_modules/**',
      //   // 'src/**/demo/*.ts',
      //   // 'src/**/*-api.ts',
      //   // 'src/**/*.md'
      // ],
      runtimeHelpers: true,
    }),
    terser(),
    uglify(),
    copy({
      targets: [{ src: '../../scripts/globalStyle/compiled-colors.less', dest: 'web-react/style' }],
    }),
    postcss({
      plugins: [autoprefixer()],
      use: {
        sass: null,
        stylus: null,
        less: { javascriptEnabled: true },
      },
      extract: true,
    }),
  ],
  external: ['react', 'react-dom'],
};
