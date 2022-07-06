import React from 'react'
import {Brand, CTA, Feature, Navbar} from './components'
import {Blog, Footer, Header, Possibility, Theme} from './containers'

import './App.css'

const App = () => {
    return(
        <div className='App'>
            <div className='gradient_bg'>
            <Navbar/>
            <Header/>
            <Brand/>
            <Theme/>
            <Feature/>
            <Possibility/>
            <CTA/>
            <Blog/>
            </div>
            <Footer/>
        </div>
    )
}

export default App