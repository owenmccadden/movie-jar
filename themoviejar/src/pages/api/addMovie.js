// pages/api/addMovie.js
import axios from 'axios';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { id, movieId } = req.body;

    try {
        // Replace this URL with the actual URL of your backend API
        const baseUrl = process.env.BACKEND_API_URL;
        const backendApiUrl = baseUrl + '/jar/movie/put';

        const response = await axios.post(backendApiUrl, {
            id,
            movie_id: movieId,
        });

        return res.status(response.status).json(response.data);
    } catch (error) {
        console.error('Error adding movie:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
