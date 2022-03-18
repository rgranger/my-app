import { getSeries, createSerie } from '../_db';
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

export const post = makeAuthAPI(({ body }) => {
    // TODO validate body

    return createSerie({
        name: body.name,
        status: body.status,
        img: body.img,
        last_episode_viewed: body.last_episode_viewed,
    }).then(serie => ({
        status: 201,
        body: serie,
    })).catch((e) => ({
        status: 500,
        body: e.message
    }))
})
