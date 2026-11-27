import { readFileSync } from 'node:fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ts from 'typescript';

const themeScript = new URL('./src/theme-init.ts', import.meta.url);

const inlineThemeScript = {
  name: 'inline-theme-script',
  transformIndexHtml() {
    const source = readFileSync(themeScript, 'utf8');
    const { outputText } = ts.transpileModule(source, {
      compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
    });

    // A classic inline script runs before the page body is parsed.
    return [{ tag: 'script', children: outputText, injectTo: 'head' }];
  },
};

export default defineConfig({
  build: {
    outDir: 'build',
  },
  base: './',
  plugins: [react(), inlineThemeScript],
});
