import React from "react"

import "../scss/Hero.scss"
import logo from "../assets/logo.svg"

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <img src={logo} className="logo" alt="Radrone Technologies" />
        <h1>Radrone Technologies</h1>

        {/* MOUSE ICON */}
        <i className="bx bxs-mouse mouse"></i>
      </div>
    </section>
  )
}
