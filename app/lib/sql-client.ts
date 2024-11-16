import pg from 'pg';

const { Client } = pg;
export const client = new Client({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  port: 5432,
});

client.connect().catch(err => {
  console.error('Database connection error:', err);
});
