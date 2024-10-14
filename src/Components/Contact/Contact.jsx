import React from 'react';
import './Contact.css';

function Contact(props) {
  return (
    <div style={{ padding: "1em", borderRadius:'50%'}}>
      {props.link ? (
        <a href={props.link}>
          <img src={props.image} alt={props.text} className="Image" style={{width:"3.2em", height:'3.4em'}}/>
        </a>
      ) : (
      
        <a href={`mailto:pavansrisai2614@gmail.com`}>
          <img src={props.image} alt={props.text} className="Image" style={{width:"3.2em", height:'3em'}}/>
        </a>
      )}
    </div>
  );
}

export default Contact;
