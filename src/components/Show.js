import React, { Component } from 'react';

import axios from 'axios';

export class Show extends Component {

    constructor(props) {
        super(props);
        this.state = {
          project: {}
        };

        this.deleteMe = this.deleteMe.bind(this);
      }
    
      componentDidMount() {
        axios.get('http://localhost:5000/api/'+ this.props.match.params.id)
          .then(res => {
            this.setState({ project: res.data });
            console.log(this.state.project);
          });
      }

      componentWillReceiveProps(nextProps) {
        axios.get('http://localhost:5000/api/'+ nextProps.match.params.id)
          .then(res => {
            this.setState({ project: res.data });
            console.log(this.state.project);
          });
      }

      deleteMe(){
        alert('Project Name: ' + this.state.project._id )
        axios.delete('http://localhost:5000/api/'+ this.state.project._id)
        console.log("Delete done.");
        this.props.history.push('/');
      }

  render() {
    return (
        <div className="main-panel">
            <nav className="navbar navbar-default navbar-fixed">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="">Tasks: {this.state.project.title}</a>
                        <button className="btn btn-danger" onClick={this.deleteMe}>Delete</button>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-left">
                            <li>
                            
                            </li>                  
                        </ul> 
                    </div>
                </div>
            </nav>
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card ">
                                <div className="header">
                                    <h4 className="title">Tasks</h4>
                                    <a href=""><i className="pe-7s-plus task-n"></i><p className="category">New Task</p></a>
                                </div>
                                <div className="content">
                                    <div className="table-full-width">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <label className="checkbox">
                                                            <input type="checkbox" value="" data-toggle="checkbox"/>
                                                        </label>
                                                    </td>
                                                    <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                    <td className="td-actions text-right">
                                                        <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                                            <i className="fa fa-edit"></i>
                                                        </button>
                                                        <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                            <i className="fa fa-times"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="checkbox">
                                                            <input type="checkbox" value="" data-toggle="checkbox" checked=""/>
                                                        </label>
                                                    </td>
                                                    <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                                    <td className="td-actions text-right">
                                                        <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                                            <i className="fa fa-edit"></i>
                                                        </button>
                                                        <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                            <i className="fa fa-times"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="checkbox">
                                                            <input type="checkbox" value="" data-toggle="checkbox" checked=""/>
                                                        </label>
                                                    </td>
                                                    <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                                                    </td>
                                                    <td className="td-actions text-right">
                                                        <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                                            <i className="fa fa-edit"></i>
                                                        </button>
                                                        <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                            <i className="fa fa-times"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="checkbox">
                                                            <input type="checkbox" value="" data-toggle="checkbox"/>
                                                        </label>
                                                    </td>
                                                    <td>Create 4 Invisible User Experiences you Never Knew About</td>
                                                    <td className="td-actions text-right">
                                                        <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                                            <i className="fa fa-edit"></i>
                                                        </button>
                                                        <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                            <i className="fa fa-times"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="checkbox">
                                                            <input type="checkbox" value="" data-toggle="checkbox"/>
                                                        </label>
                                                    </td>
                                                    <td>Read "Following makes Medium better"</td>
                                                    <td className="td-actions text-right">
                                                        <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                                            <i className="fa fa-edit"></i>
                                                        </button>
                                                        <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                            <i className="fa fa-times"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label className="checkbox">
                                                            <input type="checkbox" value="" data-toggle="checkbox"/>
                                                        </label>
                                                    </td>
                                                    <td>Unfollow 5 enemies from twitter</td>
                                                    <td className="td-actions text-right">
                                                        <button type="button" rel="tooltip" title="Edit Task" className="btn btn-info btn-simple btn-xs">
                                                            <i className="fa fa-edit"></i>
                                                        </button>
                                                        <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                            <i className="fa fa-times"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="footer">
                                        <hr/>                      
                                        <div className="stats">
                                            <i className="fa fa-history"></i> Updated 3 minutes ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}