import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import '../common/lib';

import Home from '../component/home';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" breadcrumbName="主页"  component={Home}>
        </Route>
    </Router>
), document.getElementById('react-content'))
