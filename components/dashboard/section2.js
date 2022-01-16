import style from "./db.module.css";
import Dropbox from "./Dropbox";

export default function Section2({ refId, jwt }) {
  return (
    <div className={style.section2}>
      <div className={style.section2content}>
        <h2 className={style.titles}>NOTE</h2>
        <p className={style.note}>
          1.olor sit amet, consectetur adipiscing elit. Egestas dui consectetur
          enim, etiam.Lorem ipsum dolor sit amet,
        </p>
      </div>{" "}
      <p className={style.note}>
        2.consectetur adipiscing elit. Egestas dui consectetur enim,zjsdam.
      </p>
      <Dropbox refId={refId} jwt={jwt} />
    </div>
  );
}
