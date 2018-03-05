import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { CreateProject } from './CreateProject';

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

      componentWillMount(nextProps) {
        axios.get('http://localhost:5000/api/')
          .then(res => {
            this.setState({ projects: res.data });
            console.log(this.state.projects);
          });
      }
   
    render() {
        return (
            <div className ="sidebar" data-color="purple" data-image="assets/img/sidebar-5.jpg">
              <div className ="sidebar-wrapper">
                    <div className ="logo">
                        <Link to={'/'} className ="simple-text">
                            Projects
                        </Link>
                    </div>
                    <div className="header">
                      <Link to={`/createproject`}><i className="pe-7s-plus task-n"></i><p className="category">New Task</p></Link>
                    </div>
                      <div className="header">
                        <Route path='/createproject' component={CreateProject} />
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
        );
    }
}
