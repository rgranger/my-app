import { series, setSeries } from './_db';
import { makeAuthAPI } from './_auth';

export const get = makeAuthAPI((ctx) => ({
     status: 200,
     body: series
}))

export const post = makeAuthAPI(({ body }) => {
    console.log('body', body)
})
