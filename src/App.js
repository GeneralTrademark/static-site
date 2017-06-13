import React, { Component } from 'react'
import Project from './Project'
import './App.css'
import metaData from './meta.json'
import projectData from './projects.json'

class App extends Component {
  makeProjectList = () => {
  const projectList = projectData.map((project, index) => {
    return (
      <Project project={project} index={index}/>
    )
    })
    return projectList
  }

  render() {
    return (
      <div className="App">
      <header>
        <h1>{'gt'}</h1>

      </header>
      <main>
        <ul>
          {this.makeProjectList()}
          <li>
            <div className={'oval infoOval'}>
              <div className={'num'}> {'i'} </div>
            </div>
            <div className ={'contactList'}>
              <h4>{metaData.name}</h4>
              <h4>{metaData.address}</h4>
              <h4>{metaData.phone}</h4>
              <h4>{metaData.email}</h4>
            </div>
          </li>
        </ul>

      </main>
      </div>
    );
  }
}

export default App;
