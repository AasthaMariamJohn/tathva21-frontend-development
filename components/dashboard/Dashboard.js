import style from "./db.module.css"
import { Center } from "@chakra-ui/react";
import EventCard from "./EventCard"
import {events} from "./data"
import Section2 from "./section2";
import EventComponent from "./EventComponent"
import Team from "./Team";
const cards= [];

    


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
