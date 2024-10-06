import { drizzle } from "drizzle-orm/node-postgres";
import postgres from "postgres";
import { getXataClient } from "../../xata"; 
import { env } from "~/env";
import * as schema from "./schema";

import { Client } from 'pg';

const xata = getXataClient();
const client = new Client({ connectionString: xata.sql.connectionString });
await client.connect();
export const db = drizzle(client);


// For production use cases, you can create a pool of connections with the TCP client:

// const xata = getXataClient();
// const pool = new Pool({ connectionString: xata.sql.connectionString, max: 20 });
// const db = drizzle(pool);


/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
// const globalForDb = globalThis as unknown as {
//   conn: postgres.Sql | undefined;
// };

// const conn = globalForDb.conn ?? postgres(env.DATABASE_URL);
// if (env.NODE_ENV !== "production") globalForDb.conn = conn;

// export const db = drizzle(conn, { schema });


