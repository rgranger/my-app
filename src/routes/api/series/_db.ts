import { db } from '$lib/db';

export const getSeries = () => {
    try {
        const stmt = db.prepare(`SELECT * FROM series;`)

        return Promise.resolve(stmt.all())
    } catch (e) {
        return Promise.reject(e)
    }
}

export const getSerie = (id) => {
    try {
        const stmt = db.prepare(`
        SELECT * FROM series WHERE id = ?;`)

        return Promise.resolve(stmt.get(id))
    } catch (e) {
        return Promise.reject(e)
    }
}

export const updateSerie = ({ id, name, last_episode_viewed, finished, img }) => {
    try {
        const stmt = db.prepare(`
        UPDATE series
        SET name = ?,
            last_episode_viewed = ?,
            finished = ?,
            img = ?
        WHERE id = ?
        RETURNING *;`)

        return Promise.resolve(stmt.get(name, last_episode_viewed, +finished, img, id))
    } catch (e) {
        return Promise.reject(e)
    }
}

export const createSerie = ({ name, last_episode_viewed, finished, img }) => {
    try {
        const stmt = db.prepare(`
        INSERT INTO series (name, last_episode_viewed, finished, img)
        VALUES (?, ?, ?, ?) RETURNING *;`)

        return Promise.resolve(stmt.get(name, last_episode_viewed, finished, img))
    } catch (e) {
        return Promise.reject(e)
    }
}

export const removeSerie = (id) => {
    try {
        const deleteStmt = db.prepare(`
        DELETE FROM series WHERE id = ?;`)
        const getAllStmt = db.prepare(`SELECT * from series;`)

        const transaction = db.transaction(() => {
            deleteStmt.run(id)
            return getAllStmt.all()
        })

        return Promise.resolve(transaction())
    } catch (e) {
        return Promise.reject(e)
    }
}
