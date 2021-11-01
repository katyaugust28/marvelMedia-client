import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import moviesApp from './reducers/reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

// import statement to indicate that you need to bundle the './index.scss' 
import './index.scss';

const store = createStore(moviesApp, devToolsEnhancer());

//main componenet (will eventually use all the others)
class marvelMediaApplication extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Container>
                    <MainView />
                </Container>
            </Provider>
        );
    }
}

//finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

//tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(marvelMediaApplication), container);
