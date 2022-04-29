import Database from 'better-sqlite3'

export const db = new Database('myapp.db')

db.exec(`
CREATE TABLE IF NOT EXISTS series (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    finished INTEGER NOT NULL,
    img TEXT NOT NULL,
    last_episode_viewed TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

INSERT INTO users (username, password)
SELECT 'toto', '$2b$10$MxresAmokHmPbtO1SMXqj.wmUVqrcopVupTFU9D5PC4N1zsDOvjsS'
WHERE NOT EXISTS (SELECT * FROM users);
`)
