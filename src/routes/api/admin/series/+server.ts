import { getSeries, createSerie } from "$lib/server/series"

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    try {
        const series = await getSeries()

        return new Response(
            JSON.stringify(series),
            {
                status: 200
            }
        )
    } catch(e) {
        return new Response(
            e.message,
            {
                status: 500
            }
        )
    }
}

/** @type {import('./$types').RequestHandler} */

export async function POST({ request }) {
	// TODO validate body
	const { name, img, last_episode_viewed } = await request.json();

    try {
        const serie = await createSerie({
            name,
            finished: 0,
            img,
            last_episode_viewed
        })

        return new Response(
            JSON.stringify(serie),
            {
                status: 201
            }
        )
    } catch(e) {
        return new Response(
            e.message,
            {
                status: 500,
            }
        )
    }
}
