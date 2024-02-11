import React from 'react'
import data from "./../../yourdata"
import Fade from "react-reveal/Fade"
import style from "./Header.module.css"
export default function Header() {
    return (
        <div className={`vh_10`}>
             <div className="container">
        <div className={`${style.headerContainer} vh_10 py-4`}>
          <Fade bottom>
            <h2 >
              Hi, I'm <span>  {data.name} </span> {" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className={``}>
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : ""}
              {/* <br/> */}
                {" "}
                {data.headerTagline[1]}
             {/* <br/> */}
                {" "}
                {data.headerTagline[2]
                   }
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            <a
              href={`mailto:${
                data.contactEmail ? data.contactEmail : "hello@chetanverma.com"
              }`}
              className={`btn ${style.connectBtn}`}
            >
              CONNECT WITH ME
            </a>
          </Fade>
        </div>
      </div>
        </div>
    )
}
