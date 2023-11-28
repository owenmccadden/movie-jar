// util/tmdb.js
import axios from 'axios';

const TMDB_API_KEY = 'YOUR_TMDB_API_KEY';

const tmdb = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: TMDB_API_KEY,
    },
});

export const getMovieDetails = async (movieId) => {
    try {
        const response = await tmdb.get(`/movie/${movieId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        throw error;
    }
};
