const knex = require("knex")({
  client: "pg",
  version: "7.2",
  debug: true,
  connection: {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.DATABASE,
  },
});

export default () => knex;
