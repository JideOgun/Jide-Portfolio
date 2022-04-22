import React from 'react';
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import {FaGithubSquare, FaLinkedin} from 'react-icons/fa'
import {SiCodesandbox} from 'react-icons/si'



function Footer () {
    return ( 
        <MDBFooter className='footer' bg="primary">
        <MDBContainer>
        <MDBRow>
        <MDBCol>
          <div ><a className='links' href="https://www.linkedin.com/in/jide-ogunbanjo/"><FaLinkedin/>LinkedIn</a></div>
        </MDBCol>
        <MDBCol>
          <div> <a className='links' href="https://www.github.com/jideogun"> <FaGithubSquare/>Github</a></div>
        </MDBCol>
        <MDBCol>
          <div> <a className='links' href="https://codesandbox.io/u/jideogun"><SiCodesandbox/>CSB</a></div>
        </MDBCol>
        <MDBCol>
          <div>Jide Ogunbanjo &copy; {new Date().getFullYear()}</div>
          </MDBCol>
          
        </MDBRow>
        
        </MDBContainer>
        
        </MDBFooter>
        
     );
}

export default Footer ;