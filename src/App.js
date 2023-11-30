// src/App.js
import React from 'react';
import './App.css';
import Star from './Star/Star';
import Cursor from './Components/Cursor/Cursor'
import PersonalInfo from './Components/Personalinfo/Personalinfo';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import reactIcon from './Images/reacticon.png';
import nodeIcon from './Images/nodejsicon.png';
import expIcon from './Images/expressicon.png';
import mongoIcon from './Images/mongodbicon.png';
import pythonIcon from './Images/pythonicon.png';
import plsqlIcon from './Images/plsqlicon.png';
import javaIcon from './Images/javaicon.png';
import dsaIcon from './Images/dsaicon.png';
import git from './Images/githubicon.png'
import Contact from './Components/Contact/Contact';
import linkedin from './Images/linkedin.png';
import mail from './Images/gmail.png';
import chatapp from './Images/chatapp.png';
import leetcode from './Images/leetcode.png';
import memegenerator from './Images/memegenerator.png';
import tictactoe from './Images/tic-tac-toe.png';
import weather from './Images/weatherproject.png';
import gdclone from './Images/docsclone.png';

function App() {
 
  const numStars = 50; 
  const stars = [];
  

  for (let i = 0; i < numStars; i++) {
    const style = {
      top: `${Math.random() * 100}vh`, // Randomize vertical position
      left: `${Math.random() * 100}vw`, // Randomize horizontal position
      animationDelay: `${Math.random() * 2}s`,
    };

    stars.push(<Star key={i} style={style} />);
  }
  


  return (
    <div className="App" >
            {stars}
          <Cursor/>
      <div className='container'>
        <div id="moon-circle">
          <div class="small-circle" id="small-circle-one"></div>
          <div class="small-circle" id="small-circle-two"></div>
          <div class="small-circle"o id="small-circle-three"></div>
          <div class="small-circle" id="small-circle-four"></div>
          <div class="small-circle" id="small-circle-five"></div>
          <div class="small-circle" id="small-circle-six"></div>
        </div>
        <PersonalInfo className='intro-text ' />  
      </div>
      <div className='Skill'> 
        <div className='Skill-container'>
        <div className='Projects-title'>
          <h4 className='Skill-head' style={{width:"auto"}}
        >My Tech Stack
        </h4>
          </div>
          <div className='Skill-grid'>
            {/* First Row */}
            <Skills name={"React js"} Image={reactIcon} />
            <Skills name={"Node js"} Image={nodeIcon} />
            <Skills name={"Express"} Image={expIcon} />
            <Skills name={"Mongo"} Image={mongoIcon} />
            {/* Second Row */}
            <Skills name={"Python"} Image={pythonIcon} />
            <Skills name={"Pl-SQL"} Image={plsqlIcon} />
            <Skills name={"GIT"} Image={dsaIcon} />
            <Skills name={"Java"} Image={javaIcon} />
          </div>
            <div className='Projects-title' style={{paddingTop:"7%"}}>
            <p className="DownArrow">↓</p>
            </div>
          <div className='Projects-title' style={{paddingTop:"5%",fontSize:"2em"}}>
          </div>
        </div>
      </div>
      <div className='Projects'>
      <h3 className='Project-head' style={{fontFamily:"Dancing Script"}}>Here are my
       recent projects 👉</h3>            
            <Projects className='card' color={"#000000"} title={"Collaborative Text Editor"} description1={"Our Collaborative Text Editor,empowers multiple users to seamlessly work on a single document in real-time. Effortlessly edit, share, and save your work and witness live updates."}   description2={""} link={"https://github.com/srisai-2614/docsclone"} Image={gdclone}/>
            <Projects className='card'  color={"#000000"} title={"Tom vs Jerry Tic-Tac-Toe"} description1={"Play Tic-Tac-Toe with a twist in this cat-and-mouse showdown. Be Jerry, outsmart Tom, and enjoy character-specific messages for an entertaining game,bring the classic rivalry to life in a delightful match."}   description2={""} link={"https://github.com/srisai-2614/tic-tac-toe"} Image={tictactoe}/>
            <Projects className='card' color={"#000000"} title={"Weather Checker"} description1={"Weather Checker web app, developed using React and the OpenWeather API, provides up-to-the-minute weather data for cities across the globe and We can stay informed about weather conditions."}   description2={""} link={"https://github.com/srisai-2614/weatherapp"} Image={weather}/>
            <Projects className='card'  color={"#000000"} title={"Meme Generator"} description1={"Created a React-based meme generator that fetches images from an API consisting more than 100 images,allowing users to add custom text in real-time for instant meme creation"}   description2={""} link={"https://github.com/srisai-2614/memegenerator"} Image={memegenerator}/>
            <Projects className='card' color={"#000000"} title={"Sorting Visualizer"} description1={"The Sorting Visualizer project is an interactive web application that visually demonstrates various sorting algorithms in real-time. Users can choose from algorithms and can observe the sorting process through a dynamic graphical representation."} link={"https://github.com/srisai-2614/Sorting-Visualizer"}   description2={""} Image={chatapp}/>


           
      </div>
      <div className='Projects-title' style={{paddingTop:"7%"}}>
            <p className="DownArrow">↓</p>
            </div>
      <div className='Projects-title' >
              <h3  style={{fontFamily:"Dancing Script"}}>Let's Connect</h3>

      </div>
          <div className='Projects-title'>
          <div className='Contact-container'>
            <Contact link={"https://www.linkedin.com/in/akula-pavansrisai/"} image={linkedin} text={""}/>
            <Contact link={"https://github.com/srisai-2614"} image={git} text={""}/>
            
            <Contact  image={mail} text={""}/>
            
            <Contact link={"https://leetcode.com/pavansrisai22447/"} image={leetcode} text={""}/>
          </div>
          </div>
        
    </div>
  );
}

export default App;
