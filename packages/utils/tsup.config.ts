import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'utils',
  target: 'esnext',
  format: ['cjs', 'esm'],
  sourcemap: true,
  clean: true,
  dts: true,
  minify: true,
  treeshake: true,
})