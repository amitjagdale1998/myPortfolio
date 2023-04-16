import React from 'react'
import '../resumeCss/education.css'
import FiberManualRecordSharpIcon from '@mui/icons-material/FiberManualRecordSharp';
export default function Education() {
  return (
    <div className='education-page'>
      
       
      <span><FiberManualRecordSharpIcon  fontSize='small' style={{
        color:'red'
      }} />Yashoda technical campus,satara(Shivaji university ,Kolhapur)</span><button id='btn1'>2019-2022</button><br></br>
      <span> Master of Computer Application (M.C.A)</span><br></br>
       <span><FiberManualRecordSharpIcon style={{
        color:'red'}}  fontSize='small' />Yshwantrao chavan institute of science ,satara<button id='btn1'>2016-2019</button></span><br></br>   
       <span> Bachelor of computer science(B.S.C)</span><br></br>
        <span><FiberManualRecordSharpIcon style={{
        color:'red'}}  fontSize='small' />Chh.Shahu academy ,satara</span><button id='btn1'>2015-2016</button><br></br>
        <span>H.S.C,state board of maharashtra</span><br></br>
          <span><FiberManualRecordSharpIcon style={{
        color:'red'}}  fontSize='small' />Dyansagar vidyalaya , satara</span><button id='btn1'>2013-2014</button><br></br>   
          <span> S.S.C,state board of maharashtra </span><br></br>
          
             
    </div>
    
  )
}
