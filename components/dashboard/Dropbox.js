import style from "./db.module.css"

export default function Dropbox(){
    return(
        <div className={style.dropbox}>
            <input type="file" name="myFile" className={style.dropZone}/>
        </div>
    )
}