import { v4 as uuidv4 } from '@lukeed/uuid';

export const user = {
     username: 'toto',
     password: 'toto',
}

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

let sessions = [];

export const createSession = (username) => {
    const session = {
     id: uuidv4(),
     username,
    };
    sessions.push(session);
    return Promise.resolve(session);
};

export const getSession = (id) => {
    const session = sessions.find((session) => session.id === id);
    if (!session) return Promise.resolve(null);
    return Promise.resolve(session);
};

export const removeSession = (id) => {
    const session = sessions.find((session) => session.id === id);
    if (!session) return Promise.reject(new Error('Session not found'));
    sessions = sessions.filter((session) => session.id !== id);
    return Promise.resolve(session);
};

export const getSeries = () => {
    return Promise.resolve(series);
}

export const getSerie = (id) => {
    const serie = series.find((serie) => serie.id === id);

    return serie
        ? Promise.resolve(serie)
        : Promise.reject(new Error('Invalid serie id'));
}

export const updateSerie = ({ id, name, last_episode_viewed, status }) => {
    let serie = series.find((serie) => serie.id === id);

    if (!serie) return Promise.reject(new Error('Serie not found'));

    serie.name = name;
    serie.last_episode_viewed = last_episode_viewed;
    serie.status = status;

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
