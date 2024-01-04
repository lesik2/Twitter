import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    EnvironmentPlugin([
      'VITE_APP_KEY',
      'VITE_APP_AUTH_DOMAIN',
      'VITE_APP_PROJECT_ID',
      'VITE_APP_STORAGE_BUCKET',
      'VITE_APP_MESSAGING_SENDER_ID',
      'VITE_APP_ID',
    ]),
  ],
});
