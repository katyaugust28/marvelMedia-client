import React from 'react'
import axios from 'axios'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import './main-view.scss'

import { setMovies } from '../../actions/actions';
import MoviesList from '../movies-list/movies-list';
import { LoginView } from '../login-view/login-view'
import { RegistrationView } from '../registration-view/registration-view'
//import { MovieCard } from '../movie-card/movie-card'
import { MovieView } from '../movie-view/movie-view'
import { Navbar } from '../navbar/navbar'
import { ProfileView } from '../profile-view/profile-view'
import { DirectorView } from '../director-view/director-view'

class MainView extends React.Component {
    constructor() {
        //the moment a component is made in memory (the place to initialize a state's values)
        super() //initializes your component's state- set to null initially
        this.state = {
            movies: [],
            user: null,
        }
    }

    componentDidMount() {
        let accessToken = localStorage.getItem('token')
        if (accessToken !== null) {
            this.setState({
                user: localStorage.getItem('user'),
            })
            this.getMovies(accessToken)
        }
    }

    onRegister(register) {
        this.setState({
            register,
        })
    }

    onLoggedIn(authData) {
        console.log(authData)
        this.setState({
            user: authData.user.Username,
        })

        localStorage.setItem('token', authData.token)
        localStorage.setItem('user', authData.user.Username)
        this.getMovies(authData.token)
    }

    onLoggedOut() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        this.setState({
            user: null,
        })
    }

    getMovies(token) {
        axios
            .get('https://marvel-media-api.herokuapp.com/movies', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                this.props.setMovies(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        let { movies } = this.props;
        let { user } = this.state;

        return (
            <Router>
                <Navbar user={user} />
                <Row className='main-view justify-content-md-center'>
                    <Route
                        exact
                        path='/'
                        render={() => {
                            if (!user)
                                return (
                                    <Col>
                                        <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                                    </Col>
                                )
                            if (movies.length === 0) return <div className="main-view" />;

                            return <MoviesList movies={movies} />;
                        }} />

                    <Route
                        path='/register'
                        render={() => {
                            if (user) return <Redirect to='/' />
                            return (
                                <Col>
                                    <RegistrationView />
                                </Col>
                            )
                        }}
                    />

                    <Route
                        path='/movies/:movieId'
                        render={({ match, history }) => {
                            if (!user)
                                return (
                                    <Col>
                                        <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                                    </Col>
                                )
                            if (movies.length === 0) return <div className='main-view' />
                            return (
                                <Col md={8}>
                                    <MovieView
                                        movie={movies.find((m) => m._id === match.params.movieId)}
                                        onBackClick={() => history.goBack()}
                                    />
                                </Col>
                            )
                        }}
                    />

                    <Route
                        path='/directors/:name'
                        render={({ match, history }) => {
                            if (!user)
                                return (
                                    <Col>
                                        <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                                    </Col>
                                )
                            if (movies.length === 0) return <div className='main-view' />
                            return (
                                <Col md={8}>
                                    <DirectorView
                                        director={
                                            movies.find((m) => m.Director.Name === match.params.name)
                                                .Director
                                        }
                                        onBackClick={() => history.goBack()}
                                        movies={movies}
                                    />
                                </Col>
                            )
                        }}
                    />

                    <Route
                        path='/movies/genres/:name'
                        render={({ match, history }) => {
                            if (!user)
                                return (
                                    <Col>
                                        <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                                    </Col>
                                )
                            if (movies.length === 0) return <div className='main-view' />
                            return (
                                <Col md={8}>
                                    <GenreView
                                        genre={
                                            movies.find((m) => m.Genre.Name === match.params.name)
                                                .Genre
                                        }
                                        onBackClick={() => history.goBack()}
                                        movies={movies}
                                    />
                                </Col>
                            )
                        }}
                    />

                    <Route
                        exact
                        path='/users/:username'
                        render={({ history }) => {
                            if (!user)
                                return (
                                    <LoginView onLoggedIn={(data) => this.onLoggedIn(data)} />
                                )
                            if (movies.length === 0) return
                            return <ProfileView history={history} movies={movies} />
                        }}
                    />
                </Row>
            </Router>
        )
    }
}

let mapStateToProps = state => {
    return { movies: state.movies }
}

export default connect(mapStateToProps, { setMovies })(MainView);
