import React from 'react'
import './About.css'
// import img from '../../assets/img.img'
import img2 from '../../assets/Anurag.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-tite">
            <h1>About Me</h1>
            {/* <img src={img} alt="" /> */}
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={img2} alt="anurag" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced Frontend Developer</p>
                    <p>My passion for Frontend Development is not only</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>REACT JS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>NEXTJS</p><hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About