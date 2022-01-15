import style from "./db.module.css"

export default function EventCard(props){
    return(
        <div className={style.eventcard}>
        <h2>{props.eventName}</h2>
        <img src={props.eventImg}></img>
        </div>
    )
}