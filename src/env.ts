import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    TURSO_URL: z.string().min(1),
    TURSO_TOKEN: z.string().min(1),
  },
  runtimeEnv: process.env,
});
