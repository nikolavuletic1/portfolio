// import React, { useState } from 'react'
// import './Navbar.scss';
// import { images } from '../../constants';
// import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
// import {Link} from "react-scroll"



// const Navbar = () => {
//     const [toggle, setToggle] = useState(false);


//     return (
//         <nav className='app__navbar'>
//             <div className='app__navbar-logo'>
//                 <img src={images.logo} alt='logo' />
//             </div>
//             <ul className='app__navbar-links'>
//                 {['home', 'about', 'work', 'contact'].map((item) => (
//                     <li className='app__flex p-text' key={`link-${item}`}>
//                          {/* <div /> */}
//                 {/* <motion.div
//                   initial={{width:0}}
//                   animate={{width: "100%"}}
//                   exit={{x: window.innerWidth, transition: {duration:1.1}}} > */}
//                 <div className='dot' />
//                         {/* <a href={`#${item}`}>{item}</a> */}
//                         <Link to={item} smooth='true' offset={0} duration={600}>{item}</Link>
//                   {/* </motion.div> */}
//                     </li>
//                 ))}
//             </ul>

//             <div className='app__navbar-menu'>
//                 <AiOutlineMenu onClick={() => setToggle(true)} />

//                 {toggle && (
//                     // <motion.div
//                     //     animate={{ x: [250, 0] }}
//                     //     transition={{ duration: 0.75, ease: 'easeOut' }}
//                     // >
//                     <div className='app-navbar1'> 
//                        <AiOutlineClose className='app__navbar-menu' onClick={() => setToggle(false)}  />
//                         {/* <FiPackage style={{ height: "1220px" }} onClick={() => setToggle(false)} /> */}
                       
//                         <ul>
                       
//                             {['home', 'about', 'work', 'contact'].map((item) => (
//                                 <li key={item}>
//                                     {/* <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a> */}
//                                     <Link to={item} smooth='true' offset={-10} duration={600} onClick={() => setToggle(false)}>{item}</Link>
//                                 </li>
//                             ))}
//                         </ul>
//                         </div>
//                     // </motion.div>
//                 )}

//             </div>

//         </nav>

//     )
// }
// // export default AppWrap(Navbar);
// export default Navbar;


// import React, { useState } from 'react'
// import './Navbar.scss';
// import { images } from '../../constants';
// import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
// import {Link} from "react-scroll"
// import SocialMedia from '../SocialMedia';

// const Navbar = () => {
//     const [toggle, setToggle] = useState(false);

//     return (
//         <nav className='app__navbar'>
//             <div className='app__navbar-logo'>
//                 <img src={images.logo} alt='logo' />
//             </div>
//             <SocialMedia/>
//             <ul className='app__navbar-links'>
//                 {['home', 'about', 'work', 'contact'].map((item) => (
//                     <li className='app__flex p-text' key={`link-${item}`}>
//                         <div className='dot' />
//                         <Link to={item} href={`#${item}`} smooth='true' offset={0} duration={600} aria-label={`Scroll to ${item}`}>{item}</Link>
//                     </li>
//                 ))}
//             </ul>

//             <div className='app__navbar-menu'>
//                 <AiOutlineMenu onClick={() => setToggle(true)} />

//                 {toggle && (
//                     <div className='app-navbar1'> 
//                        <AiOutlineClose className='app__navbar-menu' onClick={() => setToggle(false)}  />
//                         <ul>
//                             {['home', 'about', 'work', 'contact'].map((item) => (
//                                 <li key={item}>
//                                     <Link to={item} href={`#${item}`} smooth='true' offset={-10} duration={600} onClick={() => setToggle(false)} aria-label={`Scroll to ${item}`}>{item}</Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     )
// }

// export default Navbar;

// Navbar.js

import React, { useState } from 'react';
import './Navbar.scss';
import { images } from '../../constants';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';
import SocialMedia from '../SocialMedia';

const Navbar = () => {
    
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={images.logo} alt='logo' />
            </div>
            {/* Pass a className prop to customize the style */}
            <SocialMedia className='navbar-style' />
            <ul className='app__navbar-links'>
                {['home', 'about', 'work', 'contact'].map((item) => (
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div className='dot' />
                        <Link to={item} href={`#${item}`} smooth='true' offset={0} duration={600} aria-label={`Scroll to ${item}`}>{item}</Link>
                    </li>
                ))}
            </ul>

            <div className='app__navbar-menu'>
                <AiOutlineMenu onClick={() => setToggle(true)} />

                {toggle && (
                    <div className='app-navbar1'>
                        <AiOutlineClose className='app__navbar-menu' onClick={() => setToggle(false)} />
                        <ul>
                            {['home', 'about', 'work', 'contact'].map((item) => (
                                <li key={item}>
                                    <Link to={item} href={`#${item}`} smooth='true' offset={-10} duration={600} onClick={() => setToggle(false)} aria-label={`Scroll to ${item}`}>{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
