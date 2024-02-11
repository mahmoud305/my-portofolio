import React from 'react'
import style from "./Navbar.module.css"
export default function Navbar() {
    return (
        <div>
            <nav className={`${style.myNavbar} navbar navbar-expand-lg navbar-light fixed-top`}>
  <div className="container">
    <a className={`navbar-brand ${style.name}`} href="#">Portofolio.</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link ${style.mynavLink}`} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link   ${style.mynavLink}`} href="#Work">Work</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link  ${style.mynavLink}`} href="#About">About</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link  ${style.mynavLink}`} href="#Skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link  ${style.mynavLink}`} href="#Courses">Courses</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link  ${style.mynavLink}`} href="#Contact">Contact</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>
        </div>
    )
}
