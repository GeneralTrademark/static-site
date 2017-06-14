import React, { Component } from 'react'
import Project from './Project'
import './App.css'
import metaData from './meta.json'
import projectData from './projects.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      infoOpen: false,
      hoverColor: 'black',
      infoOvalBackground: 'rgba(255,255,255,0)'
    }
  }

  makeProjectList = () => {
    const projectList = projectData.map((project, index) => {
      return (
        <Project project={project} index={index}/>
      )
    })
      return projectList
  }

  handleOpenInfo = () => {
    this.setState({
      infoOpen: !this.state.infoOpen,
      hoverColor: this.state.infoOpen ? 'black' : 'white',
      infoOvalBackground: this.state.infoOpen ? 'rgba(255,255,255,0)' : 'rgba(255,255,255,0)',
    })
  }

  onMouseEnter = () => {
    this.setState({
      hoverColor: this.state.infoOpen ? 'white' : 'red',
    })
  }

  onMouseLeave = () => {
    this.setState({
      hoverColor: this.state.infoOpen ? 'white' : 'black',
    })
  }

  render() {
    let trayHeight = '400px'
    let mainMarginTop = '0px'
    // let trayHeight = 0;
    // let mainMarginTop = '240px'
    // if (this.state.infoOpen) {
    //   trayHeight = '400px'
    //   mainMarginTop = '50px'
    // } else {
    //   trayHeight = 0
    //   mainMarginTop = '240px'
    // }

    return (
      <div className={'app'}>
      <header style={{height: trayHeight}}>
        <div className={'info'} style={{color: this.state.hoverColor}}>
          <h4> {metaData.address} </h4>
          <h4> {metaData.instagram} </h4>
          <h4> {metaData.email} </h4>
          </div>
        </header>
      <article>
        <li>
          <div
            className={'oval infoOval'}
            onClick={()=>this.handleOpenInfo()}
            style={{borderColor:this.state.hoverColor, backgroundColor:this.state.infoOvalBackground}}
            onMouseEnter={()=>this.onMouseEnter()}
            onMouseLeave={()=>this.onMouseLeave()}>
            <div style={{WebkitTextStrokeColor:this.state.hoverColor}} className={'num'}> {'i'} </div>
          </div>
        </li>
        <h1 style={{WebkitTextStrokeColor:this.state.hoverColor}}>{'gt'}</h1>
      </article>
      <main style={{marginTop: mainMarginTop}}>
        <ul>
          {this.makeProjectList()}
        </ul>

      </main>
      </div>
    );
  }
}

export default App;
