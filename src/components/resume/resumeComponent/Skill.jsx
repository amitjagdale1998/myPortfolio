import React from 'react'
import '../resumeCss/skill.css'
export default function Skill() {
  return (
   <div className='education-page'>
    <div className='skill-icon'>
      <span>HTML</span>
      <span>CSS</span>
      <span>Javascript</span>
      <span>Reactjs</span>
      {/* <span>Nodejs</span>
      <span>Mongodb</span>
      <span>SQL</span> */}
    </div>
    <div class="wrap-circles">
  
  {/* <div class="circle per-25">
    <div class="inner">25%</div>
  </div> */}
  <div className='responsive-skill'><p>Html</p></div>
  <div class="circle per-60">
    <div class="inner">60%</div>
  </div>
  <div className='responsive-skill'><p>CSS</p></div>
  <div class="circle per-60">
    <div class="inner">60%</div>
  </div>
  <div className='responsive-skill'><p>Javascript</p></div>
  <div class="circle per-60">
    <div class="inner">60%</div>
  </div>
  <div className='responsive-skill'><p>Reactjs</p></div>
  <div class="circle per-40">
    <div class="inner">40%</div>
  </div>
  {/* <div class="circle per-40">
    <div class="inner">40%</div>
  </div> */}
  {/* <div class="circle per-100">
    <div class="inner">100%</div>
  </div> */}
</div>
<div className='skill-icon'>  

<span>Nodejs</span>
      <span>Mongodb</span>
      <span>SQL</span>


</div>
<div className='wrap-circle2'>
<div className='responsive-skill'>Nodejs</div>
<div class="circle per-40">
    <div class="inner">40%</div>
  </div>
  <div className='responsive-skill'>Mongodb</div>
  <div class="circle per-40">
    <div class="inner">40%</div>
  </div>
  <div className='responsive-skill'>SQL</div>
  <div class="circle per-40">
    <div class="inner">40%</div>
  </div>
</div>

   </div>
  )
}
