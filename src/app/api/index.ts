import Elysia from "elysia";

export const routes = new Elysia({ prefix: "/api" }).get("/ping", () => "pong");
