/** @type {import('./$types').RequestHandler} */
export function GET() {
    return new Response(
        JSON.stringify([]),
        {
            status: 200
        }
    )
}
