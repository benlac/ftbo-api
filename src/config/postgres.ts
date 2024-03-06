import knex from "knex";
import "dotenv/config";

const knexConnection = knex({
  client: "pg",
  connection: process.env.PG_CONNECTION_STRING,
  pool: { min: 5, max: 30 },
});

export default knexConnection;
