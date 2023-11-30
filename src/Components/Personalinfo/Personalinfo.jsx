import React, { useState, useEffect } from 'react';
import './Personalinfo.css'; // Import your CSS file
import resume from '../../Images/MyResume.pdf';
import Icon from '@mdi/react';
import { mdiFileDownload } from '@mdi/js';


function PersonalInfo() {
  const [showGreet, setShowGreet] = useState(false);  
  const [showName, setShowName] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  
  useEffect(() => {
    const GreetTimeout = setTimeout(() => {
      setShowGreet(true);
    }, 500); 
    // After a delay, show the name
    const nameTimeout = setTimeout(() => {
      setShowName(true);
    }, 1000); // Adjust the delay as needed

    // After another delay, show the address
    const addressTimeout = setTimeout(() => {
      setShowAddress(true);
    }, 2000); // Adjust the delay as needed

    return () => {
      clearTimeout(GreetTimeout);
      clearTimeout(nameTimeout);
      clearTimeout(addressTimeout);
    };
  }, []);

  return (
    <div className="personal-info show">
      <div className={`greet ${showGreet ? 'show' : ''}`}>
          <h2 style={{width:"100%",fontFamily:"Dancing Script"
          }}>Hi,I'm PAVAN SRI SAI</h2>
      </div>
      <div className={`name ${showName ? 'show' : ''}`}>
          <p> A passionate engineer with a love for coding and a knack for solving complex problems. I enjoy turning ideas into reality through the power of technology. With a strong foundation in programming, I'm always eager to take on new challenges and learn something new every day.</p>
      </div>
      <div className={`address ${showAddress ? 'show' : ''}`}>
      <p style={{fontSize:"0.8rem"}}>You can download👉<a href={resume} download="AKULA_PAVAN SRI SAI_Resume.pdf" style={{cursor:'none'}}>
        <div className='button-container'><button className='button' style={{color:'white', cursor:'none',background:'#000000',boxShadow:'0 0 2px 0 #000'}}>My Resume<Icon path={mdiFileDownload} size={0.7} style={{color:'#'}} className='icon'/></button>    </div>
      </a></p>
      </div>
      <p className="DownArrow">↓</p>
    </div>
  );
}

export default PersonalInfo;
