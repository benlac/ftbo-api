import knex from "knex";

const knexConnection = knex({
  client: "postgresql",
  connection: {
    host: process.env["PG_HOST"],
    user: process.env["PG_USER"],
    password: process.env["PG_PASSWORD"],
    database: process.env["DATABASE_NAME"],
    port: Number(process.env["PG_PORT"]),
  },
  pool: { min: 5, max: 30 },
});

export default knexConnection;
