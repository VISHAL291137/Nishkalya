import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        middlewareMode: false,
        hmr: {
          protocol: 'ws',
          host: 'localhost',
          port: 5173,
        },
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom'],
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              'vendor': ['react', 'react-dom'],
              'router': ['react-router-dom', '@remix-run/router'],
              'icons': ['lucide-react'],
              'gemini': ['@google/genai']
            }
          }
        },
        chunkSizeWarningLimit: 600,
        minify: 'esbuild',
        sourcemap: false,
      }
    };
});
