import vue from '@vitejs/plugin-vue';
import typescript2 from 'rollup-plugin-typescript2';
import * as path from 'path';
import { defineConfig } from 'vite';

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/modules/VueFileUploaderPlugin.ts'),
      name: 'VueFileUploader',
      fileName: (format) => `vue-file-uploader.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
      },
    },
  },
  plugins: [
    vue(),
    typescript2({
      check: false,
      include: [path.resolve(__dirname, 'src/modules/**/*.vue')],
      exclude: [path.resolve(__dirname, 'vite.config.ts')],
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
    }),
  ],
});
