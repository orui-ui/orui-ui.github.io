import typescript from 'rollup-plugin-typescript2';
import less from 'rollup-plugin-less';
import clear from 'rollup-plugin-clear';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
// import { uglify } from 'rollup-plugin-uglify';
import copy from 'rollup-plugin-copy';
// import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
// import styles from 'rollup-plugin-styles';
import path from "path";

import pkg from "./package.json";

export default {
  input: ['./src/index.ts'],
  output: [
    {
      // 出口文件
      dir: path.dirname(pkg.module),
      format: "es", // es模块导出，支持按需加载
      name: pkg.name,
      exports: "named", // 指定导出模式（自动、默认、命名、无）
      preserveModules: true, // 保留模块结构
      preserveModulesRoot: "src", // 将保留的模块放在根级别的此路径下
   },
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json'
    }),
    clear({
      targets: ['bin'],
    }),
    resolve(),
    commonjs(),
    babel({
      // exclude: 'node_modules/**',
      exclude: [
        'node_modules/**',
        'src/**/demo/*',
        'src/**/*-api.tsx',
        'src/**/*.md'
      ],
      // runtimeHelpers: true,
    }),
    less({
      output: './bin/style/index.css'
    }),
    autoprefixer(),
    terser(),
    // uglify(),
    copy({
      targets: [{ src: './src/Icon/assets', dest: './bin/style/' }],
    }),
    // postcss({
    //   plugins: [autoprefixer()],
    // }),
  ],
  external: ['react', 'react-dom'],
};
