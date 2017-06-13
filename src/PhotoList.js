import React, { Component } from 'react'
import './App.css'

class PhotoList extends Component {
  makePhotoList = () => {
    const photoList = this.props.project.assets.map((asset) => {
      return (
        <img
          key={`photo${this.props.project.key}${asset}`}
          alt={this.props.project.key}
          src={`../assets/${this.props.project.key}/${asset}`} />
      )
    })
    return photoList
  }

  render() {
    return (
      <div className={'photoList'}>
        {this.makePhotoList()}
      </div>
    );
  }
}

export default PhotoList
