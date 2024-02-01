/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

// import React from 'react';
// import {Link} from 'react-scroll'

// const NavigationDots = ({ active }) => (


//   <div className="app__navigation">
//     {['home', 'about', 'work','contact'].map((item, index) => (
//       // <a
//       //   href={`#${item}`}
//       //   key={item + index}
//       //   className="app__navigation-dot"
//       //   style={active === item ? { backgroundColor: '#313BAC' } : {}}
//       // />
//       <Link to={item} key={index} smooth='true' offset={0} duration={600}
      
//       className="app__navigation-dot"
//       style={active === item ? { width:'20px', height:'20px', borderRadius: '50%',
//        border: '1px solid var(--lightBlue-color)', background: 'radial-gradient(circle, var(--lightBlue-color) 25%, rgba(0,0,0,0) 45%)',
//         boxShadow: '#07BADD 0px 0px 3px' 
     
//        } : {}}
//       ></Link>                                                 
//     ))}
//   </div>
// );

// export default NavigationDots;


import React from 'react';
import {Link} from 'react-scroll'

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'about', 'work','contact'].map((item, index) => (
      <Link 
        to={item} 
        href={`#${item}`}
        key={index} 
        smooth='true' 
        offset={0} 
        duration={600}
        aria-label={`Scroll to ${item}`}
        className="app__navigation-dot"
        style={active === item ? { 
          width:'20px', 
          height:'20px', 
          borderRadius: '50%',
          border: '1px solid var(--lightBlue-color)', 
          background: 'radial-gradient(circle, var(--lightBlue-color) 25%, rgba(0,0,0,0) 45%)',
          boxShadow: '#07BADD 0px 0px 3px' 
        } : {}}
      ></Link>                                                 
    ))}
  </div>
);

export default NavigationDots;

