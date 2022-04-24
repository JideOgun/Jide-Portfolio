import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { SiCodesandbox } from 'react-icons/si';

function Footer() {
  return (
    <MDBFooter className="footer" bg="primary">
     
     
          <div className="footLinks">
            <div>
              <div>
                <a
                  className="links"
                  href="https://www.linkedin.com/in/jide-ogunbanjo/"
                >
                  <FaLinkedin />
                  <span className="footerLinkText">LinkedIn</span>
                </a>
              </div>
            </div>
            <div>
              <div>
                {' '}
                <a className="links" href="https://www.github.com/jideogun">
                  {' '}
                  <FaGithubSquare />
                  <span className="footerLinkText">Github</span>
                </a>
              </div>
            </div>
            <div>
              <div>
                {' '}
                <a className="links" href="https://codesandbox.io/u/jideogun">
                  <SiCodesandbox />
                  <span className="footerLinkText">codesandbox</span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div>Jide Ogunbanjo &copy; {new Date().getFullYear()}</div>
          </div>
      
    </MDBFooter>
  );
}

export default Footer;
