import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import propTypes from 'prop-types';
import { Link } from "react-router-dom";
import axios from 'axios';

import './movie-view.scss';

export class MovieView extends React.Component {

    render() {
        const { movie, genre, onBackClick } = this.props;
        return (
            <div className="movie-view">
                <div className="movie-poster">
                    <img src={movie.ImagePath} />
                </div>
                <div className="movie-title">
                    <h1>
                        <Badge bg="primary">
                            <span className="value">{movie.Title}</span>
                        </Badge></h1>
                </div>
                <div className="movie-year">
                    <span className="label">Year: </span>
                    <span className="value">{movie.Year}</span>
                </div>
                <div className="movie-description">
                    <span className="label">Description: </span>
                    <span className="value">{movie.Description}</span>
                </div>
                <div className="movie-genre">
                    <Link to={`/genres/${movie.Genre.Name}`}>
                        <Button variant="link">Genre: </Button>
                    </Link>
                </div>
                <div className="movie-director">
                    <Link to={`/directors/${movie.Director.Name}`}>
                        <Button variant="link">Director: </Button>
                    </Link>
                    <span className="value">{movie.Director.Name}</span>
                </div>
                <button onClick={() => { onBackClick(null); }}>Back</button>
            </div>
        );
    }
}