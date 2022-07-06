import React from 'react'
import {atlassian, dropbox, google, shopify, slack} from './import'
import './brand.css'

const Brand = () => {
  return (
    <div className='brand_container'>
      <div className='brand_container-google'>
          <img src= {google} alt = 'google'/>
      </div>
      <div className='brand_container-slack'>
         <img src= {slack} alt = 'slack'/>
      </div>
      <div className='brand_container-atlassian'>
         <img src= {atlassian} alt = 'atlassian'/>
      </div>
      <div className='brand_container-dropbox'>
         <img src= {dropbox} alt = 'dropbox'/>
      </div>
      <div className='brand_container-shopify'>
        <img src= {shopify} alt = 'shopify'/>
      </div>
    </div>
  )
}

export default Brand
