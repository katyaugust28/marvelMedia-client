import React from 'react';
import PropTypes from 'prop-types';

export class MovieCard extends React.Component {
    render() {
        const { movie, onMovieClick } = this.props;
        return <div className="movie-card" onClick={() => { onMovieClick(movie); }} >{movie.Title}</div>;
    }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Year: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        //Genre: PropTypes.string.isRequired,
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string,
        })
        //ImagePath: PropTypes.string,

    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};

//onMovieClick = prop function
//movie = prop object