// components/AddMovieForm.js
import React, { useState } from 'react';
import styles from '../styles/AddMovieForm.module.css';

const AddMovieForm = ({ onSubmit }) => {
    const [movieTitle, setMovieTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(movieTitle);
        setMovieTitle('');
    };

    return (
        <form className={styles['add-movie-form']} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter movie title"
                value={movieTitle}
                onChange={(e) => setMovieTitle(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default AddMovieForm;
