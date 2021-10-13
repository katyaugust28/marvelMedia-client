import React from 'react';
import propTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export class DirectorView extends React.Component {

    render() {
        const { movie, onBackClick, director } = this.props;
        console.log("higigoi3ifiohohh"
        return (
            <div className="director-view">

                <div className="director-name">
                    <Badge bg="primary">
                        <h1>
                            <span className="value">{JSON.stringify(movie)}</span>
                        </h1>
                    </Badge>
                </div>
                <div className="director-bio">
                    <span className="value">{movie.Director.Bio}</span>
                </div>

                <div className="director-birthyear">
                    <span className="value">{movie.Director.Birthyear}</span>
                </div>

                <Button variant="primary" onClick={() => { onBackClick(null); }}>Back</Button>

            </div>
        );
    }
}

// DirectorView.propTypes = {
//     Director: propTypes.shape({
//         Name: propTypes.string.isRequired,
//         Bio: propTypes.string.isRequired,
//         Birthyear: propTypes.string.isRequired,
//     }).isRequired
// };

export default DirectorView;
