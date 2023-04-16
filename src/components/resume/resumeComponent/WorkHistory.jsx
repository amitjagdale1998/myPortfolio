import React from 'react'
import '../resumeCss/education.css'
import FiberManualRecordSharpIcon from '@mui/icons-material/FiberManualRecordSharp';
import '../resumeCss/workHistory.css'
export default function WorkHistory() {
  return (
    <div className='workhistory-page'>
      
    <span><FiberManualRecordSharpIcon  fontSize='small' style={{
      color:'red'
    }} /><b>Designation:</b>Junior software developer</span><button id='btn1'>JAN 2023 - present</button><br></br>
      <span><b>Comapny:</b>Axar Decision Software,Vadodra,Gujrat.</span><br></br>
      <span><b>Responsibilities:</b>Meeting with the development team to discuss user interface ideas and applications.
Reviewing application requirements and interface designs.
Identifying web-based user interactions.
Developing and implementing highly responsive user interface components using react concepts.
Writing application interface codes using JavaScript following react.js workflows.
Troubleshooting interface software and debugging application codes.
Developing and implementing front-end architecture to support user interface concepts.
Monitoring and improving front-end performance.
Documenting application changes and developing updates.</span><br></br>
     <span><FiberManualRecordSharpIcon style={{
      color:'red'}}  fontSize='small' />
      <b>Internship:</b>MERN stack developer<button id='btn1'>JAN 22- JUN 22</button></span><br></br>   
      <span><b>Institute:</b>FullStackGuru ,FC-road ,Pune</span><br></br>
     <span>Worked as MERN stack developer at FullStackguru Pune pvt. Ltd. For 6 month
Experience in web application design using JAVASCRIPT based technology using
node(express.js) framework. And react.js library.
Using MongoDb database and Creating Rest Api in the javascript .
Completed MERN stack(fullstack) development certificate
Undergoing training program for web development in JAVASCRIPT from fullstackguru
pvt. Ltd.,pune </span><br></br>
        
           
  </div>
  )
}
