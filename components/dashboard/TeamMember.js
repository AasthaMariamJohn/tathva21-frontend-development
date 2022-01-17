import style from "./db.module.css"

export default function TeamMember(props){
    return(<li className={style.teammember}><span>{props.name}</span><span>{props.id}</span></li>)
}