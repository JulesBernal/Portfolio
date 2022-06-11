import {React, useState} from 'react';
import './Contact.scss';

export default function Contact() {
    // eslint-disable-next-line
    const [inputs,setInputs]=useState({});
    // eslint-disable-next-line
    const [fName,setFName]=useState("");
    // eslint-disable-next-line
    const [lName,setLName]=useState("");
    const [textarea,setTextarea]=useState("Comment here...");

    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setInputs(values=>({...values,[name]:value}))
        setTextarea(event.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(inputs);
    }

  return (
    <div className="contact">
      <header className="contact-header">
      </header>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <form onSubmit={handleSubmit}>
            <label> First Name:
                <input
                    type="text"
                    name="firstName" 
                    placeholder="First Name"
                    // placeholder={inputs.username||""}
                    required
                />
            </label>
            <label> Last Name:
                <input 
                    for="text" 
                    name="lName" 
                    placeholder="Last Name"
                />
            </label>
            <label> Email:
                <input 
                    for="text"
                    type="email" 
                    name="email"
                    placeholder="Email" 
                    required
                />
            </label>
            <label> Message:
                <textarea
                    value={textarea}
                    onChange={handleChange}
                    required
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    </div>
  );
}