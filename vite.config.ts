import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  build: {
    lib: {
      entry: 'src/my-custom-element.ts',
      name: 'MyCustomElement',
      fileName: (format) => `my-custom-element.${format}.js`,
      formats: ['iife'], // single bundled script
    },
    rollupOptions: {
      output: {
        // Avoid chunk splitting to keep a single file
        manualChunks: undefined,
      },
    },
  },
});
