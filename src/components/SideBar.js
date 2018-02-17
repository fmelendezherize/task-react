import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

export class SideBar extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
          projects: []
        };
      }
    
      componentDidMount() {
        axios.get('http://localhost:5000/api/')
          .then(res => {
            this.setState({ projects: res.data });
            console.log(this.state.projects);
          });
      }
    
    render() {
        return (
          <div>
            <div className ="sidebar" data-color="purple" data-image="assets/img/sidebar-5.jpg">
              <div className ="sidebar-wrapper">
                    <div className ="logo">
                        <a href="" className ="simple-text">
                            Projects
                        </a>
                    </div>
                    <ul className ="nav">
                    {
                      this.state.projects.map(project =>
                      <li key={project._id}>
                          <Link to={`/show/${project._id}`}>
                              <i className ="pe-7s-news-paper"></i>
                              <p>{project.title}</p>
                          </Link>
                        </li>
                      )     
                    }
                    </ul>
              </div>
            </div>
            </div>
        );
    }
}
