// Responsibl fo listing all of our projects 
import React, { Component } from 'react'
import uuid from 'uuid'


class AddProjets extends Component {

    constructor(){
        super()
        this.state =  {
            newProject:{}
        }
    }

    static defaultProps = {
        categories: ['Angular7', 'MEAN Stack', 'MERN Stack', 'React/Redux', 'Server-side rendered Node.js']
      }

    handleSubmit(e){
        e.preventDefault()
        if(this.refs.title.value === 0){alert('Title is required')}
        else{ 
          this.setState(
            {newProject: {id: uuid.v4(), title: this.refs.title.value, category: this.refs.category.value }},
            function(){this.props.addProject(this.state.newProject)}
           ) 
        } 
    }
  
  render() {

    let categoryOptions = this.props.categories.map(category => {
        return <option key={category} value={category}>{category}</option>
  });

  return (
    <div>
      <h3>Add Project</h3>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>Title</label><br />
          <input type="text" ref="title" />
        </div>
        <div>
          <label>Category</label><br />
          <select ref="category">
            {categoryOptions}
          </select>
        </div>
        <br />
        <input type="submit" value="Submit" />
        <br />
      </form>
    </div>
);
  
    }
}

export default AddProjets;