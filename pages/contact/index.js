import style from "@/styles/contact.module.css";
import { useState } from "react";
import { GrInstagram } from 'react-icons/gr'
import { BsFacebook } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { ImYoutube } from 'react-icons/im'
import { IconContext } from "react-icons";
import Overlay from "@/components/common/overlay";
import Social from "@/components/contact/Social";

export default function Contact() {
      const [forminput, setForminput] = useState({
            email: "",
            msg: "",
      });
      const handlesubmit = (event) => {
            event.preventDefault();
      };

      const handlechange = (event) => {
            setForminput({ ...forminput, [event.target.name]: event.target.value });
      };
      return (
            <Overlay>
                  <div className={style["body"]}>
                        <div className={style["info"]}>
                              <div className={style["item"]}>
                                    <p className={style["label"]}>E mail</p>
                                    <p className={style["data"]}>info@tathva.org</p>
                              </div>
                              <div className={style["item"]}>
                                    <p className={style["label"]}>phone</p>
                                    <p className={style["data"]}>+91 xxxxxxxxxx</p>
                              </div>
                              <div className={style["item"]}>
                                    <p className={style["label"]}>Address</p>
                                    <p className={style["data"]}>
                                          National Institute of Technology, Calicut Mukkam Road, Kattangal
                                          Kerala - 673601
                                    </p>
                              </div>
                              <div className={style["item"]}>
                                    <p className={style["label"]}>follow us</p>
                                    <div className={style['social']}>
                                          <IconContext.Provider value={{ className: style['social-icons'] }}>
                                                <GrInstagram />
                                                <BsFacebook />
                                                <BsLinkedin />
                                                <ImYoutube />
                                          </IconContext.Provider>
                                    </div>
                                    {/* <Social></Social> */}
                              </div>
                        </div>
                        <div className={style["form"]}>
                              <h1>Write to Us</h1>
                              <form method="POST" onSubmit={handlesubmit}>
                                    <input className={style["input"]} type="email" name="email" placeholder="email" />
                                    <textarea
                                          name=""
                                          id=""
                                          cols="30"
                                          rows="10"
                                          className={style["input"]}
                                          placeholder="message"
                                    ></textarea>
                                    <input type="submit" className={style["btn"]} />
                              </form>
                        </div>
                  </div>
            </Overlay>
      );
}
