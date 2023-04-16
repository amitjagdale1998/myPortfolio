import { useRef } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import InfoIcon from '@mui/icons-material/Info';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  // const home=useRef();
  const about=useRef();
  const resume=useRef();
  const contact=useRef();
  const scrollHandler=(eleRef)=>
  {
    window.scrollTo({top:eleRef.current.offsetTop,behavior:"smooth"})

    }
  

  return (
   <>
   
    
   <div className='col' >
   <ul className='navbar' >
    <li>HOME</li>
    <li onClick={()=>scrollHandler(about)}>ABOUT</li>
    <li onClick={()=>scrollHandler(resume)}>RESUME</li>
    <li onClick={()=>scrollHandler(contact)}>CONTACT</li>
   </ul>
   
    <div className='row' id='home' align="center">
    <Home />
    </div>
    <div className='container-fluid'>
    <div className='row' id='about' ref={about}>
    <About  />
    </div>
    <div className='row' id="resume" ref={resume}>
    <Resume  />
    </div>
    <div className='row' id="contact" ref={contact}>
    <Contact />
    </div>
    </div>
    </div>

   
   
   
   
   
   
   </>
  );
  }


export default App;
