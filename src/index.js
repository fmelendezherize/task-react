import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import { Edit } from './components/Edit';

ReactDOM.render(
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/edit/' component={Edit} />
        {/* <Route path='/create' component={Create} />
        <Route path='/show/:id' component={Show} />  */}
      </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
