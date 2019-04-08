// Responsibl fo listing all of our projects 
import React, { Component } from 'react'
import ProjectItem from './Project-item'

class Projets extends Component {
  
  deleteProject(id){this.props.onDelete(id)}

  render() {
  
    let projectItems;
    if(this.props.projects){
    projectItems = this.props.projects.map(project => {
      return(
        <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project}/>
      )

    }) 
  }

    return (
      <div className="Projects">
        My projects
        {projectItems}
      </div>
    )
  
}
}

export default Projets;