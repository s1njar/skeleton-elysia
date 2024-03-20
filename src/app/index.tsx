import { Layout } from "~/components/layout";
import Elysia from "elysia";

export const app = new Elysia().get("/", ({ html }: any) => {
  return (
    <Layout>
      <div>
        <h1 class="text-blue-500">Test</h1>
      </div>
    </Layout>
  );
});

export type App = typeof app;
