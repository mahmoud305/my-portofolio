import React from 'react'
import style from "./About.module.css";
import Fade from "react-reveal/Fade";
import data from "./../../yourdata";
export default function About() {
    return (
        <div id="About" className="vh_10">
            <Fade bottom cascade>  <h1 className="pageHeader monstFont" >About Me</h1> </Fade>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ms-auto  d-flex alig-items-center monstFont ">
                        <div className={`text-start my-auto  ${style.content} p-1 `}>
                            <p class="">Name: <span class={`${style.my_info}`}>  {data.profileName}</span> </p>
                            <p class="">Profile:  <span class={`${style.my_info}`}> {data.profileRule} </span></p>
                            <p class="">Emial:   <span class={`${style.my_info}`}> {data.profileEmial} </span>  </p>
                            <p class="">Phone:  <span class={`${style.my_info}`}> {data.profilePhone}</span> </p>
                            <p>{data.aboutParaOne}</p>
                            <br></br>
                            <br></br>
                            <p>{data.aboutParaTwo} </p>
                        </div>
                    </div>
                    <div className="col-md-4 me-auto">
                        <div className={`${style.image_wrapper}`}>
                            <img src={data.aboutImage} alt="Mahmoud Ashraf" className=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
