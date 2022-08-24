import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
import Unocss from "./config/unocss";

export default defineConfig({
  plugins: [
    vue(),
    vueJSX(),
    // 添加UnoCSS插件
    Unocss()
  ],
});