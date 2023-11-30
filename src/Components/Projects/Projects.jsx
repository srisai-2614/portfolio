import "./Projects.css";
import GitIcon from "../../Images/giticon.png"
const Projects = (props) => {
    return(
  <div className="card" style={{backgroundImage:`url(${props.Image})`}}>
    <div className="card-content">
      <h2 className="card-title" style={{color:'#000',fontFamily:'Times New Roman, serif'}}>{props.title}</h2>
      <p className="card-body" style={{color:`${props.color}`,fontFamily:'Dancing Script',fontSize:'1em'}}>
        {props.description1}
      </p>
      <p>{props.description2}</p>
      <a href={props.link} className="button" style={{color:'#fff'}}>
        <div style={{display:"flex", flexDirection:"column",color:'#000000',fontFamily:"Impact"}}>
        <img src={GitIcon} alt="gitIcon here" style={{width:"1.5em", height:"1.5em"}}/>Visit Code
        </div>
      </a>
    </div>
  </div>
    );
    };

export default Projects;
