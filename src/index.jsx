import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './components/main-view/main-view';

// import statement to indicate that you need to bundle the './index.scss' 
import './index.scss';

//main componenet (will eventually use all the others)
class marvelMediaApplication extends React.Component {
    render() {
        return (
            <MainView />
        );
    }
}

//finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

//tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(marvelMediaApplication), container);
