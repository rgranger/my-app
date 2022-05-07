import { db } from '$lib/db';

export const getSeries = async () => (await db.query('SELECT * FROM series;')).rows;
export const getSerie = async (id) =>
	(await db.query('SELECT * FROM series WHERE id = $1;', [id])).rows[0];

export const updateSerie = async ({ id, name, last_episode_viewed, finished, img }) =>
	(
		await db.query(
			`
UPDATE series
SET name = $1,
    last_episode_viewed = $2,
    finished = $3,
    img = $4
WHERE id = $5
RETURNING *;`,
			[name, last_episode_viewed, +finished, img, id]
		)
	).rows[0];

export const createSerie = async ({ name, last_episode_viewed, finished, img }) =>
	(
		await db.query(
			`
INSERT INTO series (name, last_episode_viewed, finished, img)
VALUES ($1, $2, $3, $4)
RETURNING *;`,
			[name, last_episode_viewed, finished, img]
		)
	).rows[0];

export const removeSerie = async (id) => {
	await db.query('DELETE FROM series WHERE id = $1;', [id]);
	return (await db.query('SELECT * FROM series')).rows;
};
