import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { SideBar } from './components/SideBar';
import { Show } from './components/Show';
import { Home } from './components/Home';

class App extends Component {

  render() {
    return (
      <Router>
      <div className ="wrapper">
        <SideBar/>
        <main role="main">
          <Route exact path='/' component={Home} />
          <Route path='/show/:id' component={Show} />
        </main>
        <footer className ="footer">
            <div className ="container-fluid">
                <p className ="copyright pull-right">
                   React Tasks
                </p>
            </div>
        </footer>
      </div>
      </Router>
    );
  }
}

export default App;
