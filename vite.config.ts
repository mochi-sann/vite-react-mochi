import reactRefresh from "@vitejs/plugin-react-refresh"
import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"
import WindiCSS from "vite-plugin-windicss"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), WindiCSS(), VitePWA()]
})
