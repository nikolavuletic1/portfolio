import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { motion } from 'framer-motion'

// import { images } from '../../constants'

import './About.scss'

import { client, urlFor } from '../../client';


// const abouts = [
// {title: "Web Development", description: "I am a good web developer.", imgUrl: images.about01},
// {title: "Web Design ", description: "I am a good web developer.", imgUrl: images.about02},
// {title: "UI/UX", description: "I am a good web developer.", imgUrl: images.about03},
// {title: "Animations", description: "I am a good web developer.", imgUrl: images.about04}
// ];

const About = () => {

  const [abouts, setAbouts] = useState([])
  

  useEffect(() => {
 const query = '*[_type == "abouts"]'

 client.fetch(query)

 .then((data) => setAbouts(data))
  },[]);
  

  return (
    <>
  
    <h2 className='head-text'>I know that <span>Good Development</span><br />means <span>Good Bussines</span></h2>
      <motion.div whileInView={{ x: [-200, 0], opacity: [0, 1] }}
      transition={{ duration: 0.8, type: 'tween' }} className='app__profiles'>
      {abouts.map((about, index) => (
      
      <motion.div
      whileInView={{opacity: 1}}
      whileHover={{scale:1.1}}
      transition={{duration: 0.5, type: 'tween' }}
      className='app__profile-item'
      key={about.title + index}
      >
      <div className='img-container'>
        <img src={urlFor(about.imgUrl)} alt={about.title} />
        </div>
       
        {/* <img src={urlFor(about[currentIndex].imgUrl) } alt={about.title}   /> */}
      
              
        {/* <img src={(about.imgUrl)} alt={about.title} /> */}
        <h2 className='bold-text glow-text' style={{marginTop: 20}}>{about.title}</h2>
        <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
      </motion.div>
       ))}
     </motion.div>
    </>
  )
}

export default AppWrap(About, 'about');