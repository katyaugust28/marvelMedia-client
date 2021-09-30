import React from 'react';
import axios from 'axios';

import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
    constructor() { //the moment a component is made in memory (the place to initialize a state's values)
        super(); //initializes your component's state- set to null initially
        this.state = {
            movies: [],
            selectedMovie: null,
            user: null
        };
    }

    componentDidMount() {
        axios.get('https://marvel-media-api.herokuapp.com/movies')
            .then(response => {
                this.setState({ movies: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    /* When a movie is clicked, this function is invoked and updates the state of the 'selectedMovie' property to that movie */
    setSelectedMovie(movie) {
        this.setState({
            selectedMovie: movie
        });
    }

    /*When a user successfully logs in, this function updates the 'user' property in state to the specified user*/
    onLoggedIn(user) {
        this.setState({
            user
        });
    }

    render() {
        const { movies, selectedMovie } = this.state;

        /*if no user, LoginView is rendered. If user logs in, user details are passed as a prop to LoginView*/
        if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />

        //before movies load
        if (movies.length === 0) return <div className="main-view" />;

        return (
            <div className="main-view">
                {selectedMovie
                    ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                    : movies.map(movie => (
                        <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }} />

                    ))
                }
            </div>
        );
    }

}

export default MainView;