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
        if(currentPage === 'Projects') {
            return <Projects/>
        }
          else if(currentPage === 'Background') {
            return <Background/>
          }
          else if(currentPage === 'AboutMe') {
              return <AboutMe/>
          }
          else if(currentPage === 'Education') {
            return <Education/>
        }
        else if(currentPage === 'Contact') {
            return <Contact/>
        } else {
            return <Home />
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