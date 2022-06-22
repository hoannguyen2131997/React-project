import React from 'react'
import './blog.css'
import Article from '../../components/article/Article'
import {
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
} from './imports'

const Blog = () => {
  return (
    <div class="gpt3__blog">
      <div className="gpt3__blog-header">
        <h1>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-content">
        <div className="gpt3__blog-content-groupA">
          <Article url={blog01} date= 'Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        </div>
        <div className="gpt3__blog-content-groupB">
        <Article url={blog02} date= 'Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        <Article url={blog03} date= 'Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        <Article url={blog04} date= 'Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        <Article url={blog05} date= 'Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        </div>
      </div>
    </div>
  )
}

export default Blog