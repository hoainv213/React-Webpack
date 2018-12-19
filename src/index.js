import React from 'react';
import ReactDOM from 'react-dom';
import '../src/font/raleway.css';
import '../node_modules/font-awesome/scss/font-awesome.scss';
import '../stylesheet.scss';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const routes = (
    <Router>
        <Route path="/" component={App} />
    </Router>
);

ReactDOM.render(routes, document.getElementById('index'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA