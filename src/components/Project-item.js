// Responsibl fo listing all of our projects 
import React, { Component } from 'react';

class ProjetItem extends Component {

  deleteProject(){
    this.props.onDelete()
  }

  render() {
    return (
      <div>
      <li className="Project-item">
        {this.props.project.title}: 
        {this.props.project.category}
      </li><a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </div>
    );
  }
}

export default ProjetItem;