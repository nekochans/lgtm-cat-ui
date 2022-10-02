const { build } = require('esbuild');
const inlineImage = require('esbuild-plugin-inline-image');
const { peerDependencies } = require('./package.json');

const entryFile = 'src/index.ts';

const shared = {
  bundle: true,
  entryPoints: [entryFile],
  external: Object.keys(peerDependencies),
  logLevel: 'info',
  minify: false,
  sourcemap: false,
  plugins: [inlineImage()],
};

build({
  ...shared,
  format: 'esm',
  outfile: './dist/esm/index.js',
  target: ['esnext'],
});

build({
  ...shared,
  format: 'cjs',
  outfile: './dist/cjs/index.js',
  target: ['esnext'],
});
