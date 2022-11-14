import typescript from 'rollup-plugin-typescript2';
import less from 'rollup-plugin-less';
import clear from 'rollup-plugin-clear';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { uglify } from 'rollup-plugin-uglify';
import copy from 'rollup-plugin-copy';

export default {
  input: ['./src/index.ts'],
  output: [
    {
      dir: 'bin',
      format: "es", // es模块导出，支持按需加载
      name: 'orui-ui',
      exports: "named", // 指定导出模式（自动、默认、命名、无）
      preserveModules: true, // 保留模块结构
      preserveModulesRoot: "src", // 将保留的模块放在根级别的此路径下
   },
  ],
  plugins: [
    typescript(), // 会自动读取 文件tsconfig.json配置
    clear({
      targets: ['bin'],
    }),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    less({
      output: './bin/style/index.css'
    }),
    terser(),
    uglify(),
    copy({
      targets: [{ src: './src/Icon/assets', dest: './bin/style/' }],
    }),
  ],
  external: ['react', 'react-dom'],
};
