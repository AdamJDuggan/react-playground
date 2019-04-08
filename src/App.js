import React, { Component } from 'react';
import uuid from 'uuid'
import './App.css';
import Projects from './components/Projects'
import AddProject from './components/Add-project'


class App extends Component {

  constructor(){
    super();
    this.state ={
      projects: []
    }
  }

  // fires every time the component re-renders
  componentWillMount(){
    this.setState(
      {projects: [ 
        {id: uuid.v4(), title: 'Recipie book', category: 'Angular7'},
        {id: uuid.v4(), title: 'Workout Plaza ', category: 'MERN stack'},
        {id: uuid.v4(), title: 'Client invoice app', category: 'React/Redux'}  
      ]})
  }

  handleAddProject = (project) => {
    let projects = this.state.projects
    projects.push(project)
    this.setState({projects: projects})
  }

  handleDeleteProject = (id) => {
    let projects = this.state.projects
    let index = projects.findIndex(x => x.id === id)
    projects.splice(index, 1)
    this.setState({projects: projects})
  }

  render() {
  

    return (
      <div className="App">
      <AddProject addProject={this.handleAddProject.bind(this)}/>
      <Projects test="Hello World" projects={this.state.projects} onDelete={() => this.handleDeleteProject(this)}/>
      </div>
    );
  }
}

export default App;

//   <AddProject addProject={this.handleAddProject.bind(this)}/>
//<Projects test="Hello World" projects={this.state.projects} onDelete={() => this.handleDeleteProject(this)}/>
// × Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.
