import './Skills.css'
function Skills(props){
  return(
    <div>
     <div className='Container'>
     <div className='Container-1'>
      <p>{props.name} </p>
      <img src={props.Image} alt="SkillImg" className='Image'/>
       </div>
     </div>
    </div>
  )
}
export default Skills