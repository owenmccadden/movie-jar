// MovieModal.jsx

import React from 'react';
import styles from '../styles/MovieModal.module.css';

const posterBaseUrl = 'https://image.tmdb.org/t/p/';
const posterSize = 'w500';

const MovieModal = ({ movieInfo, onClose, onRedraw }) => {
    const {
        original_title,
        overview,
        release_date,
        vote_average,
        genres,
        poster_path,
    } = movieInfo;

    const fullPosterUrl = `${posterBaseUrl}${posterSize}${poster_path}`;

    return (
        <div className={styles['movie-modal']}>
            <button className={styles['close-button']} onClick={onClose}>
                X
            </button>

            <div className={styles['movie-header']}>
                <img
                    className={styles['movie-poster']}
                    src={fullPosterUrl}
                    alt={`${original_title} Poster`}
                />
                <div className={styles['movie-details']}>
                    <h2>{original_title}</h2>
                    <p className={styles['release-date']}>Release Date: {release_date}</p>
                    <p className={styles['vote-average']}>Vote Average: {vote_average}</p>
                    <p className={styles['genres']}>
                        Genres: {genres.map((genre) => genre.name).join(', ')}
                    </p>
                </div>
            </div>

            <p className={styles['overview']}>{overview}</p>

            <div className={styles['movie-actions']}>
                <button className={styles['movie-modal-button']} onClick={onRedraw}>
                    Redraw
                </button>
            </div>
        </div>
    );
};

export default MovieModal;
