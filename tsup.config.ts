import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.tsx'],
    format: ['esm', 'cjs'],
    dts: true, // para generar archivos .d.ts
    splitting: false,
    sourcemap: true,
    clean: true,
    external: ['react'],
    esbuildOptions(options) {
        options.loader = {
            ...options.loader,
            '.css': 'copy',
        };
    },
})
