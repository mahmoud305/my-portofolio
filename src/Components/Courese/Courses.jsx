import React from 'react'
import style from "./Courses.module.css";
import Fade from "react-reveal/Fade";
import data from "./../../yourdata";
export default function Courses() {
    return (
        <div id="Courses" className="vh_10 ">
            <Fade bottom cascade>
                <h1 className="pageHeader">{data.promotionHeading}</h1>
            </Fade>
            {/* <p >{data.promotionPara}</p> */}
            <div className={`d-flex justify-content-center align-items-center flex-column px-sm-0 px-4 ${style.courses} `}>
                {data.certificates.map( (certifcate)=> <div>  <a target="_blanck" href={certifcate.CertificateLink}>{certifcate.Ceertificate}   </a>  <br /> -   </div> 
                )}
               
                {/* <a target="_blanck" href="https://coursera.org/share/c7d1f9fb55d81e1f42450696b6f54003" >Programming Foundations with JavaScript, HTML and CSS </a>
                -<a target="_blanck" href="https://coursera.org/share/06dcbd6e81c2da18d60ee0b9122a05fb" >  Design Patterns</a>
                -<a target="_blanck" href="https://coursera.org/share/181a0d20e7bb04207da70de48de2346c"> Data Structures and Performance</a>
                -<a target="_blanck" href="https://coursera.org/share/e890c97c675ee5e23f0e5d621cb7f8d9"> Object-Oriented Design </a>
                -<a target="_blanck" href="https://coursera.org/share/8591cd6de7b63e9f6794b77dcf844d9e"> Introduction to Cybersecurity Tools & Cyber Attacks</a> */}
            </div>
        </div>

    )
}
 