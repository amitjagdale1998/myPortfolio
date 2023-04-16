import React, { useRef } from 'react'
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import emailjs from'@emailjs/browser';
import './contact.css'
function Contact() {
  const[contactData,setContactData]=React.useState(
    {
      user_name:"",
      user_email:"",
      message:"",
    }
  )
    function onchangeHandle(e)
  {
    
    const name=e.target.name;
    const value=e.target.value;
    setContactData({...contactData,[name]:value})
    console.log({...contactData,[name]:value});
   

  }
  const form=useRef();
  const sendEmail=(e)=>
  {
   
    
   
    emailjs.sendForm('service_51f0ucm','template_dw2n3vm',form.current,'yfeWZtwcCpt-SnQJI')
    .then((result)=>
    {
      console.log(result.text);
      alert("email send sucessfully!")
    },(error)=>
    {
      console.log(error.text);
    })
  };
  return (
    <div className='contact-page' align="center" >
      <h5 className='animate-charcter'>CONTACT ME!</h5>
      <hr style={{background:'white'}}></hr>
      <h4>Let keep in Touch!</h4>
      <div className='container'>
      <div className='row'>
      <div className='col'>
        <h5>Get In Touch  <MarkEmailUnreadIcon/> </h5>
        <div className='nedia-icons'>
            <LinkedInIcon/><YouTubeIcon/><FacebookIcon/><InstagramIcon/>
        </div>
        <img src='https://www.linkpicture.com/q/Web-Application-Development-GuglY-Tech.jpg'  className='responsive' ></img>
      </div>
      <div className='col'>
      <form ref={form} onSubmit={sendEmail}>
        <div className='input'>
        <label>Name:</label><input type='text' value={contactData.user_name} onChange={onchangeHandle} name="user_name" placeholder='your name!' required></input>
        <label>Email:</label><input type='email' value={contactData.user_email} onChange={onchangeHandle} name="user_email" placeholder='email' required></input>
        <label>message:</label><textarea name="message" value={contactData.message} onChange={onchangeHandle} placeholder='message' required></textarea>
        <div className='btns-about'>
        <input type='submit'value="Send" id='btn1-about' />
        <button  type='reset'id="btn2-about" >cancel</button>
        </div>
        </div>
        
      </form>
      </div>
      </div>
      </div>
      </div>
  )
}

export default Contact