import React, { useState } from 'react';
import Navigation from './Navigation';
import Background from './Background';
import Home from './Home';
import AboutMe from './AboutMe';
import Education from './Education';
import Contact from './Contact';
import Projects from './Project';

function Header() {
    

    const [currentPage, setCurrentPage] = useState('Home') 
    console.log(currentPage)
      const handleRender = () => {
          if(currentPage === 'Home') {
              return <Home />
          }
          if(currentPage === 'Projects') {
            return <Projects/>
        }
          if(currentPage === 'Background') {
            return <Background/>
          }
          if(currentPage === 'AboutMe') {
              return <AboutMe/>
          }
          if(currentPage === 'Education') {
            return <Education/>
        }
        if(currentPage === 'Contact') {
            return <Contact/>
        }
      }
    
      const handlePageChange = (page) => {
        setCurrentPage(page)
      }
    

    return ( 
        <div>
           <Navigation currentPage={currentPage} handlePageChange={handlePageChange} /> 
           {handleRender()}
        </div>
     );
}

export default Header;