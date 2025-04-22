import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    base: '/scary1999.github.io/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
