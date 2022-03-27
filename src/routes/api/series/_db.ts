import { v4 as uuidv4 } from '@lukeed/uuid';

export enum SerieStatus {
    Watching,
    Finished,
}

const series = [
    {
        id: uuidv4(),
        name: 'The Walking Dead',
        last_episode_viewed: 'S01 E01',
        status: SerieStatus.Watching, 
        img: 'https://i.imgur.com/Z5zXzfJ.jpg',
    },
    {
        id: uuidv4(),
        name: 'The Big Bang Theory',
        last_episode_viewed: 'S01 E01',
        status: SerieStatus.Watching, 
        img: 'https://i.imgur.com/Z5zXzfJ.jpg',
    },
    {
        id: uuidv4(),
        name: 'The Big Bang Theory',
        last_episode_viewed: 'S01 E01',
        status: SerieStatus.Watching, 
        img: 'https://i.imgur.com/Z5zXzfJ.jpg',
    },
    {
        id: uuidv4(),
        name: 'The Big Bang Theory',
        last_episode_viewed: 'S01 E01',
        status: SerieStatus.Watching, 
        img: 'https://i.imgur.com/Z5zXzfJ.jpg',
    },
    {
        id: uuidv4(),
        name: 'The Big Bang Theory',
        last_episode_viewed: 'S01 E01',
        status: SerieStatus.Watching, 
        img: 'https://i.imgur.com/Z5zXzfJ.jpg',
    },
    {
        id: uuidv4(),
        name: 'The Big Bang Theory',
        last_episode_viewed: 'S01 E01',
        status: SerieStatus.Watching, 
        img: 'https://i.imgur.com/Z5zXzfJ.jpg',
    },
    {
        id: uuidv4(),
        name: 'The Big Bang Theory',
        last_episode_viewed: 'S01 E01',
        status: SerieStatus.Watching, 
        img: 'https://i.imgur.com/Z5zXzfJ.jpg',
    },
    {
        id: uuidv4(),
        name: 'The Big Bang Theory',
        last_episode_viewed: 'S01 E01',
        status: SerieStatus.Watching, 
        img: 'https://i.imgur.com/Z5zXzfJ.jpg',
    },
    {
        id: uuidv4(),
        name: 'The Big Bang Theory',
        last_episode_viewed: 'S01 E01',
        status: SerieStatus.Watching, 
        img: 'https://i.imgur.com/Z5zXzfJ.jpg',
    },
    {
        id: uuidv4(),
        name: 'The Big Bang Theory',
        last_episode_viewed: 'S01 E01',
        status: SerieStatus.Watching, 
        img: 'https://i.imgur.com/Z5zXzfJ.jpg',
    },
]

export const getSeries = () => {
    return Promise.resolve(series);
}

export const getSerie = (id) => {
    const serie = series.find((serie) => serie.id === id);

    return serie
        ? Promise.resolve(serie)
        : Promise.reject(new Error('Invalid serie id'));
}

export const updateSerie = ({ id, name, last_episode_viewed, status, img }) => {
    let serie = series.find((serie) => serie.id === id);

    if (!serie) return Promise.reject(new Error('Serie not found'));

    serie.name = name;
    serie.last_episode_viewed = last_episode_viewed;
    serie.status = status;
    serie.img = img;

    return Promise.resolve(serie)
}

export const createSerie = ({ name, last_episode_viewed, status, img }) => {
    const newSerie = {
        id: uuidv4(),
        name,
        last_episode_viewed,
        status,
        img,
    }

    series.push(newSerie);

    return Promise.resolve(newSerie)
}

export const removeSerie = (id) => {
    const index = series.findIndex((serie) => serie.id === id);

    if (index === -1) return Promise.reject(new Error('Serie not found'));

    series.splice(index, 1);

    return Promise.resolve(series);
}