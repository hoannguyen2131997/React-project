import React from 'react'
import './article.css'

const article = ({ url, date, title }) => {
  return (
    <div class="gpt3__article">
      <div class="gpt3__article-img">
        <img src={url} alt="Article picture" />
      </div>
      
      <div className="gpt3__article-content">
        <div>
          <span>{date}</span>
          <h1>{title}</h1>
        </div>
        
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default article