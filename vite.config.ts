import { defineConfig } from "vite"
import honox from "honox/vite"
import client from "honox/vite/client"

export default defineConfig(({ mode }) => {
  if (mode === "client") {
    return {
      plugins: [client()]
    }
  }
  return {
    plugins: [honox()],
    ssr: {
      external: ["pg"]
    }
  }
})
