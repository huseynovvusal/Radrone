import React from "react"

import "../scss/Services.scss"
import photo from "../assets/services/photo.jpeg"
import drone from "../assets/services/drone.jpeg"

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <h2>Xitmətlərimiz</h2>

        <div className="services">
          <div className="service">
            <img
              src={photo}
              alt="Professional aparatlarla video və foto çəkiliş"
            />
            <p>Professional aparatlarla video və foto çəkiliş</p>
          </div>
          <div className="service">
            <img src={drone} alt="Drone çəkilişi" />
            <p>Drone çəkilişi</p>
          </div>
        </div>
      </div>
    </section>
  )
}
