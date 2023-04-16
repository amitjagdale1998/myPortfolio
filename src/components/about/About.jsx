import React from 'react'
import './about.css'
import CircleIcon from '@mui/icons-material/Circle';
import downloadResume from '../common/downloadResume';

function About() {
  return (
    <div className='about-page' align="center">
      <h1 className='animate-charcter'>About Me</h1>
       <h4 >Why Choose Me?</h4>
       <hr></hr>
       <div className='shadow-div'>
        <div className='row'>
          
          <div className='col'>
         <img className='about-image' src='https://www.linkpicture.com/q/web-design-ga5ef6c0aa_1280_1.jpg' height={100} width={200}></img>

          </div>
          <div className='col aboutcol2'>
       <p>Knowledge in MERN stack in building Web Applications,
        used React for client side,Nodejs/Express for server side addEventListener
        MongoDB , SQL Server for database. </p>
        <p>Expertise in using React/Redux to build User interface.
          Hands-on experience in using React to build Single Page Application and solid 
          understanding of components and routing ,DoM Manipulation.Knowledge of MongoDB as well as SQL server and Mongoose,.dotenv etc
        </p>
       
       <div className='highlights'>
       <h4> <label>Here are few Highlights:</label></h4>
        <span><CircleIcon className='circleicon'/> FullStack web development</span>
        <span><CircleIcon className='circleicon'/>Interactie design</span>
        <span><CircleIcon className='circleicon'/>React and BOOtstrap</span>
        <span><CircleIcon className='circleicon'/>Building REST API</span>
        <span><CircleIcon className='circleicon'/>Managing SQL and non SQL database</span>
        </div>
       
       <div className='btns-about'>
        <button id='btn1' onClick={ ()=>alert ("amitjagdale1998@gmail.com")}>Hire me</button>
        <button id="btn2" onClick={downloadResume}>Get Resume</button>
        </div>
       </div>

       </div>

</div>
    </div>
  )
}

export default About