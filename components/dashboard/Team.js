import style from "./db.module.css"
import { teamMembers } from "./data"
import TeamMember from"./TeamMember"
const TeamMembers =teamMembers.map(p=> {
  return(<TeamMember name={p.name}  id={p.id}/>)
})


export default function Team(){
  return(
    <div className={style.team}>
      <p className={style.header}><span>TEAM</span><span>ID-090392</span></p>
        <div className={style.members}>{TeamMembers}</div>
      
      <p className={style.addmember}>ADD TEAM MEMBER</p>
    </div>
  )
}

