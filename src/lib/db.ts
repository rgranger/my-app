import { Pool } from 'pg';

export const db = new Pool({
	user: process.env.PGUSER,
	host: process.env.PGHOST,
	database: process.env.PGDATABASE,
	password: process.env.PGPASSWORD,
	port: process.env.PGPORT
});

db.query(`
CREATE TABLE IF NOT EXISTS series (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    finished INTEGER NOT NULL,
    img TEXT NOT NULL,
    last_episode_viewed TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

INSERT INTO users (username, password)
SELECT 'toto', '$2b$10$MxresAmokHmPbtO1SMXqj.wmUVqrcopVupTFU9D5PC4N1zsDOvjsS'
WHERE NOT EXISTS (SELECT * FROM users);
`);
