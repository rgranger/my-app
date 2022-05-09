import pg from 'pg';
const { Pool } = pg

export const db = new Pool({
	connectionString : process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
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
