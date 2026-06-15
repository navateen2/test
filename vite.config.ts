import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "node:path"
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
  '@components': resolve(__dirname, './src/components'),
  '@utils': resolve(__dirname, './src/utils'),
  '@hooks': resolve(__dirname, './src/hooks'),
  '@features': resolve(__dirname, './src/feautures'),
  '@auth': resolve(__dirname, './src/api-service/auth'),
  

}}
})

