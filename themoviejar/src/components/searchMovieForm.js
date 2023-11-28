// components/SearchMovieForm.js
import React, { useState } from 'react';
import styles from '../styles/SearchMovieForm.module.css';

const searchMovieForm = ({ onSubmit }) => {
    const [movieTitle, setMovieTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Call the searchMovie API with the entered movie title
            const searchApiResponse = await fetch(`/api/searchMovie?query=${movieTitle}`);
            const searchResults = await searchApiResponse.json();

            // Pass the search results to the onSubmit callback
            onSubmit(searchResults);
        } catch (error) {
            console.error('Error searching for movie:', error);
            // Handle error, show an alert, etc.
        }

        setMovieTitle('');
    };

    return (
        <form className={styles['search-movie-form']} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter movie title"
                value={movieTitle}
                onChange={(e) => setMovieTitle(e.target.value)}
            />
            <button type="submit">Search Movie</button>
        </form>
    );
};

export default searchMovieForm;
