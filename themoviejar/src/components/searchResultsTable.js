// components/SearchResultsTable.js
import React from 'react';
import styles from '../styles/SearchResultsTable.module.css';

const SearchResultsTable = ({ results, onSelect }) => {
    return (
        <table className={styles['search-results-table']}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result) => (
                    <tr key={result.id}>
                        <td>{result.title}</td>
                        <td>
                            <img
                                src={`https://image.tmdb.org/t/p/w92${result.posterPath}`}
                                alt={`${result.title} Poster`}
                            />
                        </td>
                        <td>
                            <button onClick={() => onSelect(result)}>Select</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SearchResultsTable;
