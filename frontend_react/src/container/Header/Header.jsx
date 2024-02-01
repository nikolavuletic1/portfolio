import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import ReactIcon from '../../assets/react-icon.webp';
import JSIcon from '../../assets/javascript-icon.webp';
import SassIcon from '../../assets/sass-icon.webp';
import NodeIcon from '../../assets/node-icon.webp';
import TailwindIcon from '../../assets/tailwind-icon.webp';
import GitIcon from '../../assets/git-icon.webp';
import DatabaseIcon from '../../assets/database-icon.webp';
import FigmaIcon from '../../assets/figma-icon.webp';
import { images } from '../../constants';

import { AppWrap } from '../../wrapper';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

const Header = () => {
  useEffect(() => {
    // Preload images
    const preloadImages = [
      images.profile,
      images.circle,
      ReactIcon,
      JSIcon,
      SassIcon,
      NodeIcon,
      TailwindIcon,
      GitIcon,
      DatabaseIcon,
      FigmaIcon,
    ];

    preloadImages.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, type: 'tween' }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <div>
              <p className='p-text' style={{ textAlign: 'center' }}>
                Hello, I am
              </p>
              <h1 className='head-text' style={{ textAlign: 'center' }}>
                Nick
              </h1>
              <p className='p-text' style={{ textAlign: 'center' }}>
                Web Developer
              </p>
              <p className='p-text' style={{ textAlign: 'center' }}>
                Freelancer
              </p>
            </div>
          </div>

          <div className='badge-cmp app__flex circle-tune'>
            <div>
              <p className='p-text' style={{ textAlign: 'center' }}>
                I Build
              </p>
              <p className='p-text' style={{ textAlign: 'center' }}>
                Beautiful
              </p>
              <p className='p-text' style={{ textAlign: 'center' }}>
                Interactive
              </p>
            </div>
          </div>

          <div className='badge-cmp app__flex circle-tune1'>
            <div>
              <p className='p-text' style={{ textAlign: 'center' }}>
                Websites
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img fetchpriority='high' src={images.profile} alt='profile_bg' />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>

      <section className='main-container'>
        <motion.div
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='main'
        >
          <div className='big-circle'>
            <div className='icon-block'>
              <img
                src={ReactIcon}
                style={{ width: 50, height: 50 }}
                alt='react icon'
              />
            </div>
            <div className='icon-block'>
              <img
                src={JSIcon}
                style={{ width: 45, height: 45 }}
                alt='javascript icon'
              />
            </div>
            <div className='icon-block'>
              <img
                src={SassIcon}
                style={{ width: 50, height: 50 }}
                alt='sass icon'
              />
            </div>
            <div className='icon-block'>
              <img
                src={NodeIcon}
                style={{ width: 55, height: 55 }}
                alt='node icon'
              />
            </div>
          </div>
          <div className='circle'>
            <div className='icon-block'>
              <img
                src={TailwindIcon}
                style={{ width: 50, height: 50 }}
                alt='tailwind icon'
              />
            </div>
            <div className='icon-block'>
              <img src={GitIcon} style={{ width: 50, height: 50 }} alt='git icon' />
            </div>
            <div className='icon-block'>
              <img
                src={DatabaseIcon}
                style={{ width: 45, height: 45 }}
                alt='database icon'
              />
            </div>
            <div className='icon-block'>
              <img
                src={FigmaIcon}
                style={{ width: 45, height: 45 }}
                alt='figma icon'
              />
            </div>
          </div>
        </motion.div>
      </section>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        <div className='circle-cmp app__flex'>
          <p className='p-text' style={{ textAlign: 'center' }}>
            If You Want
          </p>
          <h1 className='head-text hire' style={{ textAlign: 'center', fontSize: '2.3rem' }}>
            To Hire
          </h1>
          <p className='p-text' style={{ textAlign: 'center' }}>
            Me
          </p>
        </div>
        <div className='circle-cmp app__flex'>
          <p className='p-text' style={{ textAlign: 'center' }}>
            Contact
          </p>
          <p className='p-text' style={{ textAlign: 'center' }}>
            Me
          </p>
        </div>
        <div className='circle-cmp app__flex blue'>
{/* <div className='circle-cmpf'> */}

      {['contact'].map((item) => (
          <h1 className='p-text' style={{textAlign:'center', fontSize:'1.6rem'}} key={`link-${item}`}>
 
              <Link to={item} smooth='true' offset={0} duration={600 }>Here</Link>

          </h1>
      ))}

</div>
      </motion.div>
    </div>
  );
};




export default AppWrap(Header, 'home');


// PRELOAD VERZIJA KOJA RADI ZA TESTIRANJE JE ISPOD. BOLJI REZULTATI NA LOCAL HOSTU SU BEZ PRELOADA STO NEMA SMISLA PRVERITI

// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-scroll';
// import ReactIcon from '../../assets/react-icon.webp';
// import JSIcon from '../../assets/javascript-icon.webp';
// import SassIcon from '../../assets/sass-icon.webp';
// import NodeIcon from '../../assets/node-icon.webp';
// import TailwindIcon from '../../assets/tailwind-icon.webp';
// import GitIcon from '../../assets/git-icon.webp';
// import DatabaseIcon from '../../assets/database-icon.webp';
// import FigmaIcon from '../../assets/figma-icon.webp';
// import { images } from '../../constants';

// import { AppWrap } from '../../wrapper';
// import './Header.scss';

// const scaleVariants = {
//   whileInView: {
//     scale: [0, 1],
//     opacity: [0, 1],
//     transition: {
//       duration: 1,
//       ease: 'easeOut',
//     },
//   },
// };

// const Header = () => {
//   useEffect(() => {
//     Preload images
//     const preloadImages = [
//       images.profile,
//       images.circle,
//       ReactIcon,
//       JSIcon,
//       SassIcon,
//       NodeIcon,
//       TailwindIcon,
//       GitIcon,
//       DatabaseIcon,
//       FigmaIcon,
//     ];

//     preloadImages.forEach((image) => {
//       const img = new Image();
//       img.src = image;
//     });
//   }, []);

//   return (
//     <div className='app__header app__flex'>
//       <motion.div
//         whileInView={{ x: [-100, 0], opacity: [0, 1] }}
//         transition={{ duration: 0.5, type: 'tween' }}
//         className='app__header-info'
//       >
//         <div className='app__header-badge'>
//           <div className='badge-cmp app__flex'>
//             <div>
//               <p className='p-text' style={{ textAlign: 'center' }}>
//                 Hello, I am
//               </p>
//               <h1 className='head-text' style={{ textAlign: 'center' }}>
//                 Nick
//               </h1>
//               <p className='p-text' style={{ textAlign: 'center' }}>
//                 Web Developer
//               </p>
//               <p className='p-text' style={{ textAlign: 'center' }}>
//                 Freelancer
//               </p>
//             </div>
//           </div>

//           <div className='badge-cmp app__flex circle-tune'>
//             <div>
//               <p className='p-text' style={{ textAlign: 'center' }}>
//                 I Build
//               </p>
//               <p className='p-text' style={{ textAlign: 'center' }}>
//                 Beautiful
//               </p>
//               <p className='p-text' style={{ textAlign: 'center' }}>
//                 Interactive
//               </p>
//             </div>
//           </div>

//           <div className='badge-cmp app__flex circle-tune1'>
//             <div>
//               <p className='p-text' style={{ textAlign: 'center' }}>
//                 Websites
//               </p>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       <motion.div
//         whileInView={{ opacity: [0, 1] }}
//         transition={{ duration: 0.5, delayChildren: 0.5 }}
//         className='app__header-img'
//       >
//         <img fetchpriority='high' src={images.profile} alt='profile_bg' />
//         <motion.img
//           whileInView={{ scale: [0, 1] }}
//           transition={{ duration: 1, ease: 'easeInOut' }}
//           src={images.circle}
//           alt='profile_circle'
//           className='overlay_circle'
//         />
//       </motion.div>

//       <section className='main-container'>
//         <motion.div
//           whileInView={{ scale: [0, 1] }}
//           transition={{ duration: 1, ease: 'easeInOut' }}
//           className='main'
//         >
//           <div className='big-circle'>
//             <div className='icon-block'>
//               <img
//                 src={ReactIcon}
//                 style={{ width: 50, height: 50 }}
//                 alt='react icon'
//               />
//             </div>
//             <div className='icon-block'>
//               <img
//                 src={JSIcon}
//                 style={{ width: 45, height: 45 }}
//                 alt='javascript icon'
//               />
//             </div>
//             <div className='icon-block'>
//               <img
//                 src={SassIcon}
//                 style={{ width: 50, height: 50 }}
//                 alt='sass icon'
//               />
//             </div>
//             <div className='icon-block'>
//               <img
//                 src={NodeIcon}
//                 style={{ width: 55, height: 55 }}
//                 alt='node icon'
//               />
//             </div>
//           </div>
//           <div className='circle'>
//             <div className='icon-block'>
//               <img
//                 src={TailwindIcon}
//                 style={{ width: 50, height: 50 }}
//                 alt='tailwind icon'
//               />
//             </div>
//             <div className='icon-block'>
//               <img src={GitIcon} style={{ width: 50, height: 50 }} alt='git icon' />
//             </div>
//             <div className='icon-block'>
//               <img
//                 src={DatabaseIcon}
//                 style={{ width: 45, height: 45 }}
//                 alt='database icon'
//               />
//             </div>
//             <div className='icon-block'>
//               <img
//                 src={FigmaIcon}
//                 style={{ width: 45, height: 45 }}
//                 alt='figma icon'
//               />
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       <motion.div
//         variants={scaleVariants}
//         whileInView={scaleVariants.whileInView}
//         className='app__header-circles'
//       >
//         <div className='circle-cmp app__flex'>
//           <p className='p-text' style={{ textAlign: 'center' }}>
//             If You Want
//           </p>
//           <h1 className='head-text hire' style={{ textAlign: 'center', fontSize: '2.3rem' }}>
//             To Hire
//           </h1>
//           <p className='p-text' style={{ textAlign: 'center' }}>
//             Me
//           </p>
//         </div>
//         <div className='circle-cmp app__flex'>
//           <p className='p-text' style={{ textAlign: 'center' }}>
//             Contact
//           </p>
//           <p className='p-text' style={{ textAlign: 'center' }}>
//             Me
//           </p>
//         </div>
//         <div className='circle-cmp app__flex blue'>
//           {['contact'].map((item) => (
//             <h1 className='p-text' style={{ textAlign: 'center', fontSize: '1.6rem' }} key={`link-${item}`}>
//               <Link to={item} smooth='true' offset={0} duration={600}>Here</Link>
//             </h1>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };


// export default AppWrap(Header, 'home');
