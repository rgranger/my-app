import { getSeries, createSerie } from './_db';
import { makeAuthAPI } from '../_auth';

export const get = makeAuthAPI((ctx) => getSeries()
    .then(series => ({
        status: 200,
        body: series,
    }))
    .catch((e) => ({
        status: 500,
        body: e.message
    }))
)

export const post = makeAuthAPI(async ({ request }) => {
    // TODO validate body
    const { name, img, last_episode_viewed } = await request.json()

    return createSerie({
        name,
        finished: 0,
        img,
        last_episode_viewed,
    }).then(serie => ({
        status: 201,
        body: serie,
    })).catch((e) => ({
        status: 500,
        body: e.message
    }))
})
