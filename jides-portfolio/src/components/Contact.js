import React from 'react';



function Contact () {
    return ( 
        <div>
            Contact Information<br></br>
            <a href="https://www.linkedin.com/in/jide-ogunbanjo/">LinkedIn</a><br></br>
            <a href="https://www.github.com/jideogun">Github</a>
            <form className='form'>
            <input type="text" name="username" placeholder="Name"/><br></br>
            <input type="email" placeholder="Email"/><br></br>
            <button type="button" placeholder="Email">Submit</button>
               
            </form>
        </div>
     );
}

export default Contact ;