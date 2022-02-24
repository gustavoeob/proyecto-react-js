import React from 'react'
import CoverVideo from './cover-video.mp4'
const FirstHeader = () => {
  return (
    <div className="first-header-container">
        <div className="back-first-header"> 
           <video className="first-header-video" autoPlay muted loop src={CoverVideo}> </video> 
        </div>
        <div className="front-first-header">
            <p className="first-header-text">Whoopie.co</p>
            <p className="first-header-text-secondary">Presents</p>
            <p className="first-header-text-third">5 mouth-watering options that will blow up your mind</p>
            <a className="header-link" href={"/category/desserts"}>Find out more  → </a>
        </div>
        
    </div>
  )
}

export default FirstHeader
