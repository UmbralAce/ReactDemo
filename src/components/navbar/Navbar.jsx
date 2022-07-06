import React, {useState} from 'react';
import {RiCloseLine, RiMenu3Line} from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href = '#home'>Home</a></p>
    <p><a href = '#theme'>What GPT3?</a></p>
    <p><a href = '#possibility'>Open AI</a></p>
    <p><a href = '#article'>Case Studies</a></p>
    <p><a href = '#blog'>Library</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='react_navbar'>
      <div className='react_navbar-menu'>
        <div className='react_navbar-menu_logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='react_navbar-menu_container'>
          <Menu/>
        </div>
      </div>

      <div className='react_navbar-sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='react_navbar-mobile'>
        {toggleMenu
          ?<RiCloseLine color = '#ffffff' size = {25} onClick = { ()=> setToggleMenu(false)} />
          :<RiMenu3Line color = '#ffffff' size = {25} onClick = { ()=> setToggleMenu(true) } />
        }
        {toggleMenu &&(
          <div className='react_navbar-mobile_nav scale-up-center'>
            <div className='react_navbar-mobile_nav-links'>
              <Menu />
            </div>
            <div className='react_navbar-mobile_nav-sign'>
              <p>Sign In</p>
              <button type = 'button'>Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
