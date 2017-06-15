import React, { Component } from 'react'
import Project from './Project'
import './App.css'
import metaData from './meta.json'
import projectData from './projects.json'
import Marquee from 'react-marquee';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      infoOpen: false,
      hoverColor: 'black',
      infoOvalBackground: 'rgba(255,255,255,0)',
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
      hoverColor: this.state.infoOpen ? 'white' : 'blue',
    })
  }

  onMouseLeave = () => {
    this.setState({
      hoverColor: this.state.infoOpen ? 'white' : 'black',
    })
  }

  render() {
    let trayHeight = '20px';
    let mainMarginTop = '260px'
    let trayMargin = '0px'
    if (this.state.infoOpen) {
      trayHeight = '900px'
      trayMargin = '-620px'
      mainMarginTop = '10px'
    } else {
      trayHeight = '0px'
      mainMarginTop = '260px'
      trayMargin = '0px'
    }

    let insta = <a href="http://www.instagram.com/generaltrademark" target={"_blank"}>@generaltrademark</a>
    let address = <a href="https://goo.gl/maps/GUHquzaLzc82" target={"_blank"}>84 Withers St. Brooklyn NY 11211</a>
    let email = <a href="mailto:info@generaltrademark.com?Subject=hello" target={"_blank"}>info@generaltrademark.com</a>
    let who = 'Design R&D services. Come visit us (seriously), we are probably at studio and would love to meet you. You should look at Learning Gardens and Imbedded forms. Thanks for visiting our site!'

    let marqueeText = [email, ' // ', insta, ' // ', address, ' // ',]
    marqueeText.concat('')

    return (
      <div className={'app'}>
      <article>
        <h1 style={{WebkitTextStrokeColor:this.state.hoverColor}}>{'gt'}</h1>
        <li onClick={()=>this.handleOpenInfo()} onMouseEnter={()=>this.onMouseEnter()} onMouseLeave={()=>this.onMouseLeave()}>
          <div
            className={'oval infoOval'}
            style={{borderColor:this.state.hoverColor, backgroundColor:this.state.infoOvalBackground}}>
            <div style={{WebkitTextStrokeColor:this.state.hoverColor}} className={'num'}> {'i'} </div>
          </div>
        </li>
        <div className={'marquee'}>
          {marqueeText}{marqueeText}{marqueeText}{marqueeText}{marqueeText}{marqueeText}{marqueeText}{marqueeText}{marqueeText}{marqueeText}{marqueeText}{marqueeText}{marqueeText}
        </div>
      </article>
      <header style={{height: trayHeight, marginTop:trayMargin}} >
      </header>
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
