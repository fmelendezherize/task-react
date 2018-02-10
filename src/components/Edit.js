import React, { Component } from 'react';

import { SideBar } from './SideBar';

export class Edit extends Component {

  render() {
    return (
      <div class="wrapper">
        <SideBar/>
        <p>This is Trip Hop</p>
        <footer class="footer">
            <div class="container-fluid">
                <p class="copyright pull-right">
                   React Tasks
                </p>
            </div>
        </footer>
      </div>
    );
  }
}