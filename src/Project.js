import React, { Component } from 'react'
import './App.css'

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hoverColor: 'rgba(0,0,0,0.75)',
      galleryOpen: false,
    }
  }

  onMouseEnter = () => {
    this.setState({
      hoverColor: this.props.project.color
    })
  }

  onMouseLeave = () => {
    this.setState({
      hoverColor: 'rgba(0,0,0,0.75)'
    })
  }

  makePhotoList = () => {
    const photoList = this.props.project.assets.map((asset) => {
      return (
        <img
          key={`photo${this.props.project.key}${asset}`}
          alt={this.props.project.key}
          src={`../assets/${this.props.project.key}/${asset}`}
          onClick={() => this.handleGalleryResize()}
          style={this.state.galleryOpen ? {height: '300px'} : {height: '100px'}}/>
      )
    })
    return photoList
  }

  handleGalleryResize = () => {
    this.setState({
      galleryOpen: !this.state.galleryOpen,
    })
  }

  handleComingSoon = () => {
    if (this.props.project.status !== 'comingsoon') {
      return (
      <a
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        className={'title'}
        href={this.props.project.href}
        target={"_blank"}
        style={{color:this.state.hoverColor}}>
        <div style={{borderColor:this.state.hoverColor}} className={'oval'}>
          <div style={{webkitTextStrokeColor:this.state.hoverColor}} className={'num'}> {this.props.index < 9 ? `0${this.props.index + 1}` : this.props.index + 1} </div>
        </div>
        <h3>{this.props.project.title}</h3>
      </a>
      )
    } else {
      return (
        <div
          // onMouseEnter={this.onMouseEnter}
          // onMouseLeave={this.onMouseLeave}
          className={'title'}
          style={{color:this.state.hoverColor}}>
          <div style={{borderColor:this.state.hoverColor}} className={'oval'}>
            <div style={{webkitTextStrokeColor:this.state.hoverColor}} className={'num'}> {this.props.index < 9 ? `0${this.props.index + 1}` : this.props.index + 1} </div>
          </div>
            <h3 >{`${this.props.project.title}`}</h3>
            <h3> {'(coming soon)'}</h3>
        </div>
      )
    }
  }

  render() {
    return (
      <li className={'projectListItem'} key={`project${this.props.project.key}`}>
        {this.handleComingSoon()}
        {this.makePhotoList()}
      </li>
    );
  }
}

export default Project
