import React from 'react'
import { NavLink } from 'react-router-dom'

function VideoInfo() {
  return (
    <div className='videoinfo'>
      <NavLink to="/video" className="video_exit">X</NavLink>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/sIJQxorIIsY" title="YouTube video player" allowfullscreen></iframe>
    </div>
  )
}

export default VideoInfo
