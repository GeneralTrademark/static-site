import React, { Component } from 'react'
import PhotoList from './PhotoList'
import './App.css'

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hoverColor: 'black'
    }
  }

  onMouseEnter = () => {
    this.setState({
      hoverColor: this.props.project.color
    })
  }

  onMouseLeave = () => {
    this.setState({
      hoverColor: 'black'
    })
  }

  handleComingSoon = () => {
    if (this.props.project.status !== 'comingsoon') {
      return (
      <a
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        className={'title'}
        href={this.props.project.href}>
        <h3 style={{color:this.state.hoverColor, borderColor:this.state.hoverColor}}>{this.props.project.title}</h3>
      </a>
      )
    } else {
      return (
        <div
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          className={'title'}>
          <h3 style={{color:this.state.hoverColor, borderColor:this.state.hoverColor}}>{`${this.props.project.title} (coming soon)`}</h3>
        </div>
      )
    }
  }

  render() {
    return (
      <li
        key={`project${this.props.project.key}`}>
        <div style={{borderColor:this.state.hoverColor}} className={'oval'}>
          <div style={{webkitTextStrokeColor:this.state.hoverColor}} className={'num'}> {this.props.index < 9 ? `0${this.props.index + 1}` : this.props.index + 1} </div>
        </div>
        {this.handleComingSoon()}
        <PhotoList project={this.props.project} />
      </li>
    );
  }
}

export default Project
