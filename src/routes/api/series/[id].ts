import { getSerie, updateSerie } from '../_db';
import { makeAuthAPI } from '../_auth';

export const get = makeAuthAPI(({ body }) => getSerie(body.id)
    .then(serie => ({
        status: 200,
        body: serie,
    }))
    .catch((e) => ({
        status: 500,
        body: e.message
    }))
)

export const put = makeAuthAPI(({ body, params }) => {
    // TODO validate body

    return updateSerie({
        id: params.id,
        name: body.name,
        status: body.status,
        last_episode_viewed: body.last_episode_viewed,
        img: body.img,
    }).then(serie => ({
        status: 201,
        body: serie,
    })).catch((e) => ({
        status: 500,
        body: e.message
    }))
})
