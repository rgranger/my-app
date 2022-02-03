import { v4 as uuidv4 } from '@lukeed/uuid';

export const user = {
     username: 'toto',
     password: 'toto',
}

export const series = [
    {
        name: 'The Walking Dead',
        last_episode_viewed: 'S01 E01',
        status: 'watching', 
        img: 'https://i.imgur.com/Z5zXzfJ.jpg',
    },
    {
        name: 'The Big Bang Theory',
        last_episode_viewed: 'S01 E01',
        status: 'watching',
        img: 'https://i.imgur.com/Z5zXzfJ.jpg',
    }
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
