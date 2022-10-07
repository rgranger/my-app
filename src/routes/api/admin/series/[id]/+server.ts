import { getSerie, removeSerie, updateSerie } from '$lib/server/series';

export async function GET({ params }) {
    try {
        const serie = await getSerie(params.id)

        return new Response(
            JSON.stringify(serie),
            {
                status: 200
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

export async function PUT({ request, params }) {
	// TODO validate body
	const { name, finished, img, last_episode_viewed } = await request.json();

    try {
        const serie = await updateSerie({
            id: params.id,
            name,
            finished,
            last_episode_viewed,
            img
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

export async function DELETE({ params }) {
    try {
        const series = await removeSerie(params.id)

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
                status: 400,
            }
        )
    }
}
