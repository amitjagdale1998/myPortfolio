import React from 'react'
import '../resumeCss/projects.css'
import FiberManualRecordSharpIcon from '@mui/icons-material/FiberManualRecordSharp';

export default function Projects() {
  return (
    <div className='education-page'>
      
      <span><FiberManualRecordSharpIcon  style={{color:'red'}} fontSize='small'/><b>Project Name:</b>Sikka Prime</span><br></br>
      <span><b>Problem Statement:</b>Devlope One Platform to use all sikka product.</span><br></br>
      <span><b><em>solution:</em></b>Built easy to use Web Application to give all services in one login and combine other product applications. </span><br></br>
       <span><b><em>Technology:</em></b>React,HTML,CSS,Bootstrap,Material-UI,Kendo,Chartjs,recharts etc</span><br></br><br></br>
       
      
       <span><FiberManualRecordSharpIcon style={{color:'red'}} fontSize='small'/><b>Project Name:</b>Job Portal(academic)</span><br></br>
      <span><b>Problem Statement:</b>Built easy to use web application to mange hiring process easily.</span><br></br>
      <span><b><em>solution:</em></b>userfriendly UI and API to manage data automaticaly. </span><br></br>
       <span><b><em>Technology:</em></b>React,HTML,CSS,Bootstrap,Material-UI,Kendo,Chartjs,recharts etc</span><br></br>
       
       <span><b>Other Project:</b></span>
            <div className='other-project'>
            <span>1.Portfolio</span><br></br>
            <span>2.Live Weather app</span><br></br>
            <span>3.BMI calculator</span><br></br>
            </div>

    </div>
  )
}
