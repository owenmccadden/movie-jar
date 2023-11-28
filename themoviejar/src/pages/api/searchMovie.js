// pages/api/searchMovie.js
import axios from 'axios';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { query } = req.query;

    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1&include_adult=false`
        );

        const results = response.data.results.slice(0, 10).map((movie) => ({
            id: movie.id + "",
            title: movie.title,
            releaseDate: movie.release_date,
            overview: movie.overview,
            posterPath: movie.poster_path,
        }));

        return res.status(200).json(results);
    } catch (error) {
        console.error('Error searching for movies:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
