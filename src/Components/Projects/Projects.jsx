import React from 'react'
import './Projects.css'
import projects_data from '../../assets/projects_data'

const Projects = () => {
  return (
    <div id='projects' className='projects'>
      <div className="projects-title">
        <h1>Projects</h1>
        {/* <img src="" alt="" /> */}
      </div>
      <div className="project-container">
        {projects_data.map((project,index)=>{
          return <img key={index} src={project.w_img} alt="" />
        })}
      </div>
      <div className="project-showmore">
        <p>Show More</p>
        {/* <img src="" alt="" /> */}
      </div>
    </div>
  )
}

export default Projects