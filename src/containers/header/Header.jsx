import React from 'react'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './header.css'

const Header = () => {
  return (
    <div className='header_container section_padding' id='home'>
      <div className='header_container-left'>
        <h1 className='gradient_text'>Let's Build Something amazing with GPT-3 Open AI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. 
          Not thoughts all excercise blessing. Indulgence way 
          everything joy alteration boisterous the attachment. Party 
          we years to order allow asked of.</p>
          
          <div className='header_container-left_email'>
            <input type= {'email'} placeholder = 'Your email address' />
            <button type = 'button'>Get Started</button>
          </div>
         
          <div className='header_container-left_people'>
            <img src={people} alt='involved peolple' />
            <p>1,600 people requested access to visit in last 24 hours.</p>
          </div>
      </div>
      
      <div className='header_container-right'>
        <img src = {ai} alt='open ai' />
      </div>
    </div>
  )
}

export default Header
