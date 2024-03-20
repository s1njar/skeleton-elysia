import { html } from "@elysiajs/html";
import staticPlugin from "@elysiajs/static";
import { Elysia } from "elysia";
import { app } from "~/app";
import { routes as apiRoutes } from "~/app/api";

const server = new Elysia()
  .use(staticPlugin())
  .use(apiRoutes)
  .use(html())
  .use(app)
  .get("/health", () => "ok")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${server.server?.hostname}:${server.server?.port}`
);
