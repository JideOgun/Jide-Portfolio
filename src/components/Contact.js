import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import { Container, Row, Col } from "react-bootstrap";

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
      Please reach out if you would like to connect and collaborate!<br></br>

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
