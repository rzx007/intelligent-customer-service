import { UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const isBuild = command === 'build'
  return {
    plugins: [vue(), cssInjectedByJsPlugin(),],
    base: isBuild ? './' : '/',
  }
}