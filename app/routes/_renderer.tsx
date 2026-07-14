import { jsxRenderer } from "hono/jsx-renderer"
import { Script } from "honox/server"

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || "My Web App"}</title>
        <Script src="/app/client.ts" async />
      </head>
      <body className="bg-slate-900 text-white">
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  )
})
