const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  debug: true,
  connection: {
    host : process.env.POSTGRES_HOST,
    port : process.env.POSTGRES_PORT,
    user : process.env.POSTGRES_USER,
    password : process.env.POSTGRES_PASSWORD
  }
});

knex.raw(`
    SELECT 'CREATE DATABASE ${process.env.DATABASE}'
    WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '${process.env.DATABASE}')
`).then(() => {
  console.log("Database created");
})
.catch((e) => {
  console.log("PostgreSQL not connected");
  console.error(e);
})
  .finally(() => {
    knex.destroy()
});