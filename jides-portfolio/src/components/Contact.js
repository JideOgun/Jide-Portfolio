import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

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
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submit')
    if(!validateEmail(email)) {
        setErrorMessage('Email or username is invalid')
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
    <div>
      Contact Information<br></br>
      <a href="https://www.linkedin.com/in/jide-ogunbanjo/">LinkedIn</a>
      <br></br>
      <a href="https://www.github.com/jideogun">Github</a>
      <form className="form" >
        <input type="text" name="name" value={name} placeholder="Name" onChange={handleInputChange}/>
        <br></br>
        <input type="email" value={email} placeholder="Email" name="email" onChange={handleInputChange}/>
        <br></br>
        <textarea type="text" name="message" value={message} placeholder="leave a message" onChange={handleInputChange}></textarea>
        <br></br>
        <button type="button" placeholder="Email" onClick={handleFormSubmit} >
          Submit
        </button>
      </form>
     {renderErrorMessage()}
    </div>
  );
}

export default Contact;
