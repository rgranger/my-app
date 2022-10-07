import { getSeries  } from "$lib/server/series"

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
