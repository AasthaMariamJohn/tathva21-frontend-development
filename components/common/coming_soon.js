import styles from "./comingsoon.module.css";
import { useState ,useEffect} from "react";
import moment from "moment";
export default function ComingSoon() {
      const timeTillDate="05 26 2029, 6:00 am" 
	const timeFormat="MM DD YYYY, h:mm a" 

      const [days, setDays] = useState(0)
      const [hours, setHours] = useState(0)
      const [minutes, setMinutes] = useState(0)
      const [seconds, setSeconds] = useState(0)

      useEffect(()=>{
            setInterval(() => {
                  const then = moment(timeTillDate, timeFormat);
			const now = moment();
			const countdown = moment(then - now);
			setDays(countdown.format('D')) ;
			setHours(countdown.format('HH')) ;
                  setMinutes(countdown.format('mm'))
                  setSeconds(countdown.format('ss'))

            }, 1000);

      },[])

      return (
    <div className={styles["main"]}>
      <div className={styles["content"]}>
        <div className={styles["title"]}>
          <span>Events</span>
        </div>
        <p>COMING SOON!</p>
        <section>
          <ul id="countdown">
            <li>
              <span className={`${styles["days"]} ${styles["timenumbers"]}`}>
                {days}
              </span>
              <p
                className={`${styles["timeRefDays"]} ${styles["timedescription"]}`}
              >
                days
              </p>
            </li>
            <li>
              <span className={`${styles["hours"]} ${styles["timenumbers"]}`}>
                {hours}
              </span>
              <p
                className={`${styles["timeRefHours"]} ${styles["timedescription"]}`}
              >
                hours
              </p>
            </li>
            <li>
              <span className={`${styles["minutes"]} ${styles["timenumbers"]}`}>
                  {minutes}
              </span>
              <p
                className={`${styles["timeRefMinutes"]} ${styles["timedescription"]}`}
              >
                minutes
              </p>
            </li>
            <li>
              <span className={`${styles["seconds"]} ${styles["timenumbers"]}`}>
                {seconds}
              </span>
              <p
                className={`${styles["timeRefSeconds"]} ${styles["timedescription"]}`}
              >
                seconds
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
