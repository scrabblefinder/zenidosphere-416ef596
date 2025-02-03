import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8080,
    host: "::",
    middleware: [
      (req, res, next) => {
        if (req.url?.endsWith('.html')) {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(/* html */`
            <!DOCTYPE html>
            <html>
              <head><meta charset="utf-8"></head>
              <body><div id="root"></div></body>
            </html>
          `);
          return;
        }
        next();
      },
    ],
  },
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})