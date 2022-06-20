import React from 'react'
import './feature.css'

const Feature = ({title, text}) => {
  return (
    <div className="gpt3__whatGPT3-feature">
      <div className="gpt3__whatGPT3-feature__header">
        <div></div>
        <h2>{title}</h2>
      </div>

      <div className="gpt3__whatGPT3-feature__text">
        <p>{text}</p>
    
      </div>
    </div>
  )
}

export default Feature
