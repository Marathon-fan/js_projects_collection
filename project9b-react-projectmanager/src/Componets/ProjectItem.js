import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {

  deleteProject(id) {
    //console.log('test');
    this.props.onDelete(id);
  }


  render() {
    return (
      <li className="ProjectItem">
       <strong>{this.props.project.id}</strong>: - {this.props.project.category} <a herf="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: PropTypes.object,
  onDelete: PropTypes.func
}


export default ProjectItem;
