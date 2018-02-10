import React, { Component } from 'react';
import './App.css';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

class App extends Component {

  render() {
    return (
      <div className ="wrapper">
        <SideBar/>
        {/* <Content/> */}
        <footer className ="footer">
            <div className ="container-fluid">
                <p className ="copyright pull-right">
                   React Tasks
                </p>
            </div>
        </footer>
      </div>
    );
  }
}

export default App;
