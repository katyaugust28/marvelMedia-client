import React from 'react';
import ReactDOM from 'react-dom';

// import statement to indicate that you need to bundle the './index.scss' 
import './index.scss';

//main componenet (will eventually use all the others)
class marvelMediaApplication extends React.Component {
    render() {
        return (
            <div className="marvel-media">
                <div>Good morening</div>
            </div>
        );
    }
}

//finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

//tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(marvelMediaApplication), container);
