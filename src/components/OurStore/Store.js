"use client"

import { useEffect, useRef } from "react"
import "../OurStore/Store.css"
import storepic1 from "../../assets/images/storepic1.jpeg"
import storepic2 from "../../assets/images/storepic2.jpeg"
import storepic3 from "../../assets/images/storepic3.jpeg"

export default function Store() {
  const videoRefs = [useRef(null), useRef(null), useRef(null)]

  useEffect(() => {
    // Setup video elements with autoplay
    videoRefs.forEach((ref) => {
      if (ref.current) {
        ref.current.play().catch((error) => {
          console.log("Autoplay prevented:", error)
        })
      }
    })
  }, [])

  return (
    <div className="showroom-container">
      <h1 className="showroom-title">Your Trusted Medical Supply Store</h1>

      <p className="showroom-description">
        Visit On The Go Medical Supply showroom and explore top-quality mobility aids, medical devices, and health
        essentials. From lift chairs to mobility scooters, we're here to support your well-being.
      </p>

      <div className="image-grid">
        <div className="image-container">
          <img
            src={storepic1}
            alt="Collection of mobility scooters and medical aids"
            loading="lazy"
          />
        </div>
        <div className="image-container">
          <img
            src={storepic2}
            alt="Wheelchair and medical equipment display"
            loading="lazy"
          />
        </div>
        <div className="image-container">
          <img
            src={storepic3}
            alt="Medical supply store interior view"
            loading="lazy"
          />
        </div>
      </div>

      <div className="video-grid">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="video-container">
            <video ref={videoRefs[index]} loop muted playsInline className="video-player">
              <source src="/placeholder-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-controls">
              <button onClick={() => videoRefs[index].current?.play()} className="control-button">
                Play
              </button>
              <button onClick={() => videoRefs[index].current?.pause()} className="control-button">
                Pause
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

