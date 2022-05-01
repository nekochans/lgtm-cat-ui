import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import dts from 'rollup-plugin-dts';

const packageJson = require('./package.json');

const tailwindcss = require('tailwindcss');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        name: 'lgtm-cat-ui',
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        plugins: [
          tailwindcss('./tailwind.config.js'),
          require('autoprefixer'),
        ],
      }),
      image(),
    ],
    onwarn: (warning, defaultHandler) => {
      if (warning.loc.file.includes('/node_modules/')) return;
      defaultHandler(warning);
    },
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.css$/],
    plugins: [dts()],
    onwarn: (warning, defaultHandler) => {
      if (warning.loc.file.includes('/node_modules/')) return;
      defaultHandler(warning);
    },
  },
];
