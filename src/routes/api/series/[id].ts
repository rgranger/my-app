import { getSerie, removeSerie, updateSerie } from './_db';
import { makeAuthAPI } from '../_auth';

export const get = makeAuthAPI(({ params }) => getSerie(params.id)
    .then(serie => ({
        status: 200,
        body: serie,
    }))
    .catch((e) => ({
        status: 500,
        body: e.message
    }))
)

export const put = makeAuthAPI(async ({ request, params }) => {
    // TODO validate body
    const { name, status, img, last_episode_viewed } = await request.json()

    return updateSerie({
        id: params.id,
        name,
        status,
        last_episode_viewed,
        img,
    }).then(serie => ({
        status: 201,
        body: serie,
    })).catch((e) => ({
        status: 500,
        body: e.message
    }))
})

export const del = makeAuthAPI(({ params }) => {
    return removeSerie(params.id)
        .then(series => ({
            status: 200,
            body: series,
        }))
        .catch((e) => ({
            status: 400,
            body: e.message
        }))
})
