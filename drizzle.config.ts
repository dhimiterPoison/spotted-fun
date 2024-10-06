import { type Config } from "drizzle-kit";

import { env } from "~/env";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});


export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  // tablesFilter: ["spotted-fun_*"],
} satisfies Config;
