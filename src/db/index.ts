import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { env } from "~/env";

const turso = createClient({
  url: env.TURSO_URL,
  authToken: env.TURSO_TOKEN,
});

export const db = drizzle(turso);
