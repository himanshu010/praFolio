import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Jokes from './components/Jokes';
import './index.css';
import createBroserHistory from 'history/createBrowserHistory';
import Header from './components/Header';

ReactDOM.render(
    <Router history={createBroserHistory()}>
        <Switch>
            <Route exact path='/' render={() => <Header><App /></Header>} />
            <Route path='/jokes' render={() => <Header><Jokes /></Header>} />
        </Switch>
    </Router>, 
    document.getElementById('root')
);


// new Promise( resolve => {
//     setTimeout(() => {
//         console.log('Hello!');
//         resolve('World. Iam this!!');
//     }, 2000);
    
// })
// .then( quote => {
//     console.log(quote);
// })
// .catch( error => console.log('error', error));