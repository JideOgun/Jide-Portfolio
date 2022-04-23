import React from 'react';
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { SiCodesandbox } from 'react-icons/si';

function Footer() {
  return (
    <MDBFooter className="footer" bg="primary">
      <MDBContainer>
        <MDBRow>
          <div className="footLinks">
            <MDBCol>
              <div>
                <a
                  className="links"
                  href="https://www.linkedin.com/in/jide-ogunbanjo/"
                >
                  <FaLinkedin />
                  <span className="footerLinkText">LinkedIn</span>
                </a>
              </div>
            </MDBCol>
            <MDBCol>
              <div>
                {' '}
                <a className="links" href="https://www.github.com/jideogun">
                  {' '}
                  <FaGithubSquare />
                  <span className="footerLinkText">Github</span>
                </a>
              </div>
            </MDBCol>
            <MDBCol>
              <div>
                {' '}
                <a className="links" href="https://codesandbox.io/u/jideogun">
                  <SiCodesandbox />
                  <span className="footerLinkText">codesandbox</span>
                </a>
              </div>
            </MDBCol>
          </div>
          <MDBCol>
            <div>Jide Ogunbanjo &copy; {new Date().getFullYear()}</div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;
