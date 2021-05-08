/**
 * 参考链接: https://vitejs.dev/config/
 */
import { join } from 'path';
import { UserConfig } from 'vite';
import dotenv from 'dotenv';
import vue from '@vitejs/plugin-vue';
import createImportPlugin from 'vite-plugin-import';
import css from 'rollup-plugin-import-css';

dotenv.config({ path: join(__dirname, '.env') });
const root = join(__dirname, 'src/render');

const config: UserConfig = {
  root,
  resolve: {
    alias: {
      '~': root,
    },
  },
  base: './',
  build: {
    outDir: join('../../dist/render'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        css: '',
      },
    },
  },
  server: {
    port: +process.env.PORT,
  },
  plugins: [
    vue(),
    createImportPlugin([
      {
        libraryName: 'WSDeckBuilder',
        style: true, // or 'css'
      },
    ]),
  ],
  optimizeDeps: {
    entries: ['/node_modules/ws-deck-builder/dist/*'],
    exclude: ['electron-is-dev', 'electron-store'],
  },
};

export default config;
