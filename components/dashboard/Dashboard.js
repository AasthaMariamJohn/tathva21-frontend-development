import style from "./db.module.css"
import Section2 from "./section2";
import EventComponent from "./EventComponent"
import Team from "./Team";


    


export default function Dashboard(){
    return(
        <div className={style.main}>

           <div className={style.grid}>
               <div className={style.section1}>
                   <EventComponent/>
                   <Team/>
               </div>
           <Section2/>
           </div> 

        </div>
    )}
