// pages/api/draw.js
import axios from 'axios';

export default async (req, res) => {
    try {
        const { id } = req.body;

        console.log("id:")
        console.log(id);

        if (!id) {
            return res.status(400).json({ error: 'Missing required parameter: id' });
        }

        const baseUrl = process.env.BACKEND_API_URL;
        const AWS_API_URL = baseUrl + "/jar/movie/draw"
        const TMDB_API_KEY = process.env.TMDB_API_KEY; // Replace with your TMDB API key

        // Call AWS API to get a random movie ID

        const awsApiResponse = await axios.post(AWS_API_URL, { id });

        console.log("AWS API RESPONSE HERE!");
        console.log(awsApiResponse);

        const movieId = JSON.parse(awsApiResponse.data.body).random_movie;

        // Call TMDB API to get movie details
        const tmdbApiResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
            params: {
                api_key: TMDB_API_KEY,
            },
        });

        const movieDetails = tmdbApiResponse.data;

        res.status(200).json(movieDetails);
    } catch (error) {
        console.error('Error in /api/draw:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
