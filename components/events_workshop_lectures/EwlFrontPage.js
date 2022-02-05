import Indexcard from "./Indexcard";
import style from "./indexcard.module.css";

export default function EwlFrontPage(workshop) {
  // console.log(workshop.list);
  return (
    <>
      <div className={style.box}>
        <div className={style.grid}>
          {workshop.list.map((each) => {
            return <Indexcard key={each} details={each} />;
          })}
        </div>
      </div>
    </>
  );
}
