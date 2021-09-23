import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
    constructor() { //the moment a component is made in memory (the place to initialize a state's values)
        super(); //initializes your component's state
        this.state = {
            movies: [
                { _id: 1, Title: 'Iron man', Description: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creats a unique weaponized suit of armor to fight evil.', ImagePath: '../img/ironman.jpg' },
                { _id: 2, Title: 'The Incredible Hulk', Description: 'Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into whenever he loses his temper.', ImagePath: '../img/theincrediblehulk.jpg' },
                { _id: 3, Title: 'Iron man 2', Description: 'With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father\'s legacy.', ImagePath: '../img/ironman2.jpg' }
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
                {selectedMovie
                    ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                    : movies.map(movie => (
                        <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />
                    ))
                }
            </div>
        );
    }
}

export default MainView;