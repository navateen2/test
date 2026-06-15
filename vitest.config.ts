/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ['./src/tests/setup.ts'],
    include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
  resolve:{
    alias:{
  '@components': resolve(__dirname, './src/components'),
  '@utils': resolve(__dirname, './src/utils'),
  '@hooks': resolve(__dirname, './src/hooks'),
  '@features': resolve(__dirname, './src/features'),
  '@auth': resolve(__dirname, './src/api-service/auth'),
  

}}
})
