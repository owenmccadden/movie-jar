// pages/jars/[id].js
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../../styles/JarPage.module.css';
import Jar from '../../components/jar';
import DrawButton from '../../components/drawButton';
import SearchMovieForm from '../../components/searchMovieForm';
import MovieModal from '../../components/movieModal';
import SearchResultsTable from '../../components/searchResultsTable'; // New component
import axios from 'axios';

const JarPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const [drawnMovie, setDrawnMovie] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const handleDrawMovie = async () => {
        try {
            const drawApiResponse = await axios.post(`/api/draw`, { id: id });
            const movieDetails = drawApiResponse.data;

            setDrawnMovie(movieDetails);
            setSearchResults([]); // Clear search results when drawing a new movie
            setShowModal(true);
        } catch (error) {
            console.error('Error drawing movie:', error);
            // Handle error, show an alert, etc.
        }
    };

    const handleAddMovie = async (movieId) => {
        try {
            const addMovieResponse = await axios.post('/api/addMovie', {
                id: id,
                movieId: movieId,
            });

            console.log('Movie added successfully:', addMovieResponse.data);

        } catch (error) {
            console.error('Error adding movie:', error);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setDrawnMovie(null);
        setSearchResults([]); // Clear search results when closing the modal
    };

    const handleRedrawMovie = () => {
        // Redraw the same movie for this example, update it based on your actual logic
        handleDrawMovie();
    };

    // Function to handle searchMovie form submission
    const handleSearchMovie = async (results) => {
        setSearchResults(results);
    };

    return (
        <div className={styles.container}>
            {showModal && drawnMovie && (
                <MovieModal
                    movieInfo={drawnMovie}
                    onClose={handleCloseModal}
                    onRedraw={handleRedrawMovie}
                    searchResults={searchResults}
                />
            )}

            {!showModal && (
                <div className={styles.page}>
                    <DrawButton onClick={handleDrawMovie} />
                    <Jar />
                    <SearchMovieForm onSubmit={handleSearchMovie} />
                    {searchResults.length > 0 && (
                        <SearchResultsTable
                            results={searchResults}
                            onSelect={(movie) => {
                                handleAddMovie(movie.id);
                                setSearchResults([]);
                            }}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default JarPage;
