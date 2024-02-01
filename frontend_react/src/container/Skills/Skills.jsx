import  {React, useState, useLayoutEffect, useRef}from 'react'

import emailjs from '@emailjs/browser';

import { motion } from 'framer-motion';

// import './Footer.scss'
import { AppWrap } from '../../wrapper';

import PhoneIcon from '../../assets/phone-icon.png'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};



const Footer = () => {


  // **this prevents automatic scroll to bottom after refresh**//

  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  useLayoutEffect(() => {
    window.scrollTo(scrollX, scrollY);
  });


const [to_name, setTo_name] = useState('')
const [from_name, setFrom_name] = useState('')
const [message, setMessage] = useState('')


const SubmitInfo = () => {

  console.log(to_name + from_name + message)

  const emailContent = {
    name: to_name,
    notes: from_name,
    message: message,
  
};
// setTo_name('');
// setFrom_name('');
// setMessage('');


// 👇️ clear all input values in the form




 

  emailjs.send('service_io3vfnf', 'template_g6i4jsm', emailContent, 'zFPTP2NRDU0i9bB-q')
  .then((result) => {
      console.log(result);
      to_name.reset();
      // form.currentTarget.reset();
      // form.current.value = "";
  }, (error) => {
      console.log(error.text);
  });

  


}



  return (
<>

<h2 className="head-text-footer">Let's <span>get in</span> touch</h2>
<h2 className="head-text-footer">Make Yourself <span>A Cup Of</span> Coffie</h2>


{/* <div className='footer-wrapper'>   */}
{/* <div className='text-div'>

</div> */}

      <div className="contact__form app__flex "> 

      {/* <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, type: 'tween' }}
        className='app__header-info' */}

     
  <motion.div whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 0.7, type: 'tween' }} className="contact" action="" method="post" >
    <h3>And Write Me An Email</h3>

 
      <input placeholder="Your name" type="text" tabIndex="1" required autoFocus id='to_name'  onChange={(event) => {setTo_name(event.target.value)}}  />
  
      <input placeholder="Your Email Address" type="email" tabIndex="2" id='from_name' required onChange={(event) => {setFrom_name(event.target.value)}}  />
   
      <textarea placeholder="Type your message here...." tabIndex="3" id='message' required onChange={(event) => {setMessage(event.target.value)}} ></textarea>
    
   
      <button  name="submit" type="submit" className="contact-submit" data-submit="...Sending" onClick={SubmitInfo} >Submit</button>
     
  </motion.div>

  <motion.div
        
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles footer-position"
    >
     
        <div className='circle-cmp app__flex fotter_circle-position'>
        <h1 className='p-text' style={{textAlign:'center', fontSize:'1.3rem'}}>Or Call</h1>
        <h1 className='p-text' style={{textAlign:'center', fontSize:'1.3rem'}}>Me</h1>
             
        </div>
        {/* <div className='circle-cmp app__flex'>
        <h1 className='p-text' style={{textAlign:'center', fontSize:'1.3rem'}}>To Hire Me,</h1>
        <h1 className='p-text' style={{textAlign:'center', fontSize:'1.3rem'}}>Contact Me</h1>
        </div> */}
          {/* <div className='loader'> */}
        <div className='circle-cmpf app__flex blue'>
        {/* <h1 className='p-text' style={{textAlign:'center', fontSize:'1.3rem'}}>Here</h1> */}
        <img className='circle-cmpf' src={PhoneIcon} />
        </div>
 
      </motion.div>
</div>





</>
  )
}

// export default Footer;

export default AppWrap(Footer, 'contact');