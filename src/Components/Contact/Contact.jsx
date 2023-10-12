import React from 'react';
import './Contact.css';

function Contact(props) {
  return (
    <div style={{ padding: "1em" }}>
      {props.link ? (
        <a href={props.link}>
          <img src={props.image} alt={props.text} className="Image" />
        </a>
      ) : (
        // If 'link' is not provided, open a mailto link
        <a href={`mailto:pavansrisai2614@gmail.com`}>
          <img src={props.image} alt={props.text} className="Image" />
        </a>
      )}
    </div>
  );
}

export default Contact;
