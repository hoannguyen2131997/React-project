import React from 'react'
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/logo.svg';
const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

        <ul className="gpt3__navbar-links_list gpt3__navbar_text">
          <li className="gpt3__navbar-links_list_item">
            <a href="">Home</a>
          </li>
          <li className="gpt3__navbar-links_list_item">
            <a href="">What is GPT?</a>
          </li>
          <li className="gpt3__navbar-links_list_item">
            <a href="">Open AI</a>
          </li>
          <li className="gpt3__navbar-links_list_item">
            <a href="">Case studies</a>
          </li>
          <li className="gpt3__navbar-links_list_item">
            <a href="">Libragy</a>
          </li>
        </ul>
      </div>

      <div className="gpt3__navbar_sign gpt3__navbar_text">
        <div className="gpt3__navbar_sign_in">
          <a href="">Sign in</a>
        </div>
        <div className="gpt3__navbar_sign_up">
          <a href="">Sign up</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar