import React, { useState, useEffect } from 'react';

const apiKey = '491eff2db87ede3d9b4f6462b76a49b3';
const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

const App = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setMovies(data.results);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
        fetchMovies();
    }, []);

    return (
        <div className="container">
            <h1>IMDb Clone</h1>
            <div id="movies-list">
                {movies.map(movie => (
                    <div key={movie.id} className="movie-card">
                        <h2>{movie.title}</h2>
                        <p>Release Date: {movie.release_date}</p>
                        <p>Rating: {movie.vote_average}</p>
                        <p className="overview">{movie.overview}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
