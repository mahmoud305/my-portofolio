import React from 'react'
import style from "./Contact.module.css";
import Fade from "react-reveal/Fade";
import data from "./../../yourdata";
export default function Contact() {
    return (
        <div id="Contact" className={`${style.contact} mb-5 vh_10`}>
            <Fade bottom cascade>
                <h2 className="pageHeader">Contact</h2>
                <h3 className="monstFont">{data.contactSubHeading}</h3>
            </Fade>
            <div className="container">
                <div className="footer-container py-4 my-2">
                    <a className={`${style.email_link} `} href={`mailto:${data.contactEmail}`}>
                        {data.contactEmail}
                    </a>
                    <div className={`${style.social_icons}`}>
                         
                        {data.social.map((socialLink, index) => (
                            <a
                            className="mx-3"
                                key={index}
                                href={socialLink.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={socialLink.img} className="" alt="icons"></img>
                            </a>
                        ))}
                    </div>
                    {/* <span>
            Made With <icon>❤</icon> by{" "}
            <a href="https://www.chetanverma.com/">Chetan Verma</a>
          </span> */}
                </div>
            </div>
        </div>
    )
}
