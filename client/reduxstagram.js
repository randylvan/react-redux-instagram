import React from 'react';

import {render} from 'react-dom';

//import css
import css from './styles/style.styl';

//Import Components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import {Router, Route, IndexRoute, broswerHistory} from 'react-router';

const router = (
    <Router history={broswerHistory}>
        <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={single}></Route>
        </Route>
    </Router>
)


render(<Main/>, document.getElementById('root'));
