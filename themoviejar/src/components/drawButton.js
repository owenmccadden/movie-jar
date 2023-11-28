// components/DrawButton.js
import React from 'react';
import styles from '../styles/DrawButton.module.css';

const DrawButton = ({ onClick }) => {
    return (
        <button className={styles['draw-button']} onClick={onClick}>
            Draw a Movie
        </button>
    );
};

export default DrawButton;
