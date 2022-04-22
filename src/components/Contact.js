import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import { Container, Col } from "react-bootstrap";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
      if(e.target.name === 'email') {
          setEmail(e.target.value)
          console.log(e.target.value)
      } else if (e.target.name === 'name') {
          setName(e.target.value)
          console.log(e.target.value)
      } else if(e.target.name === 'message') {
        setMessage(e.target.value)
      } 
       if (e.target.value === '') {
        setErrorMessage('You need to enter a value')
      }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submit')
    if(!validateEmail(email)) {
        setErrorMessage('Email is invalid')
        return;
    }
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('')
    alert(`Thanks for reaching out ${name}. I will be in touch soon!`)
  }

  const renderErrorMessage = () => {
    if(errorMessage) {
        
        return (errorMessage)
    }
  }

  return (
    <Container>
    <div>
      Please reach out to <a className="emailText" href="mailto:jideogun93@gmail.com">Jideogun93@gmail.com</a> ! If you would like to connect and collaborate!<br></br>
      Click the icons in the footer for my Linked, Github and codesandbox profiles
    </div>
      


      <Col className="formClass">
        <form className="form" >
        <input type="text" name="name" value={name} placeholder="Name" onChange={handleInputChange} onBlur={handleInputChange}/>
        <br></br>
        <input type="email" value={email} placeholder="Email" name="email" onChange={handleInputChange} onBlur={handleInputChange}/>
        <br></br>
        <textarea type="text" name="message" value={message} placeholder="leave a message" onChange={handleInputChange} onBlur={handleInputChange}></textarea>
        <br></br>
        <button type="button" placeholder="Email" onClick={handleFormSubmit} >
          Submit
        </button>
      </form>
      </Col>
      
     {renderErrorMessage()}
    </Container>
  );
}

export default Contact;
