import React, { Component } from 'react';
import axios from 'axios';

export class CreateProject extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 'default'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        //alert('Project Name: ' + this.state.value )
        axios.post('http://localhost:5000/api/', {"title": this.state.value})
        .then(res => {
          console.log("Post success");
          this.props.history.push('/');
        });
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputName">Project Name</label>
                    <input type="text" class="form-control" id="exampleInputName" 
                           placeholder="Enter Project Name" value={this.state.value}
                           onChange={this.handleChange}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>        
        );
    }    
}