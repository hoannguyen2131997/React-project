import React from 'react'
import './feature.css'

const Feature = ({title, text}) => {
  return (
    <div className="gpt3__feature-component">
      <div className="gpt3__feature-component__header">
        <div></div>
        <h2>{title}</h2>
      </div>

      <div className="gpt3__feature-component__text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature
