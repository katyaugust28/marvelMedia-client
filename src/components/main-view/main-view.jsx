import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

class MainView extends React.Component {
    constructor() { //the moment a component is made in memory (the place to initialize a state's values)
        super(); //initializes your component's state
        this.state = {
            movies: [
                { _id: 1, Title: 'Iron man', Description: 'Descr. 1...', ImagePath: '...' },
                { _id: 2, Title: 'The Incredible Hulk', Description: 'Descr. 2...', ImagePath: '...' },
                { _id: 3, Title: 'Iron man 2', Description: 'Descr. 3...', ImagePath: '...' }
            ],
            selectedMovie: null
        }
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    render() {
        const { movies, selectedMovie } = this.state;

        if (selectedMovie) return <MovieView movie={selectedMovie} />;

        if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

        return (
            <div className="main-view">
                {movies.map(movie => <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />)}
            </div>
        );
    }
}

export default MainView;