import {resolve} from 'path';

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {esbuildCommonjs, viteCommonjs} from '@originjs/vite-plugin-commonjs';

const extensions = ['.tsx', '.jsx', '.ts', '.js'];

const compileNodeModules = [
  // Add every react-native package that needs compiling
  // 'react-native-gesture-handler',
].map(moduleName => resolve(__dirname, 'node_modules', moduleName));

export default defineConfig({
  plugins: [viteCommonjs(), react()],
  optimizeDeps: {
    include: [...compileNodeModules],
    esbuildOptions: {
      resolveExtensions: extensions,
      plugins: [
        esbuildCommonjs([
          // 'react-native-vector-icons',
        ]),
      ],
      loader: {'.js': 'jsx'},
    },
  },
  resolve: {
    extensions,
    alias: {
      'react-native': 'react-native-web',
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
