import style from "./db.module.css"

export default function Dropbox(){
    return(
        <div className={style.dropbox}>
            
            <span >Drop file here or click to upload</span>
            <input type="file" name="myFile" className={style.dropZoneInput}/>
        </div>
    )
}
//className={style["drop-zone__prompt"]}