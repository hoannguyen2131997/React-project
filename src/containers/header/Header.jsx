import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt3__header">
      <div className="gpt3__header_content">
        <h2>Let’s Build Something amazing with GPT-3 OpenAI</h2>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <form>
          <input type="text" name="search" placeholder="Your Email Address" />
          <button><span>Get Start</span></button>
        </form>
        <div className="gpt3__header_content_signup">
          <img src={people} />
          <span>1,600 people requested access a visit in last 24 hours</span>
        </div>
      </div>

      <div className="gpt3__header_illustration">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header