import Database from 'better-sqlite3'

export const db = new Database('myapp.db')

db.exec(`CREATE TABLE IF NOT EXISTS series (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    finished INTEGER NOT NULL,
    img TEXT NOT NULL,
    last_episode_viewed TEXT NOT NULL
);`)
