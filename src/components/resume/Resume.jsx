import React from 'react'
import ResumeTab from './resumeComponent/ResumeTab'
import './resume.css'
function Resume() {
  return (
    <div className='resume-page container'  >
      <div align="center">
      <span 
      style={{fontFamily:"Georgia, serif",fontSize:"250%" ,fontWeight:"bolder" ,
       color:"saddlebrown"}}>RESUME</span>

       <h4>My formal Bio Detail</h4>
       <hr></hr>
       </div>
      <div >
        
        <ResumeTab/>
      </div>
      
      
      </div>
  )
}

export default Resume