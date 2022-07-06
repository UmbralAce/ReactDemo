import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import './blog.css'

const Blog = () => {
  return (
    <div className='react_blog gradient_text'>
      <div className='react_blog-heading'>
        <h1>A lot is happenning, <br/> We are blogging about it.</h1>
      </div>
      <div className='react_blog-posts'>
        <div className='react_blog-posts-groupA'>
        <Article imgUrl ={blog01} date = 'Apr 03, 2022' text = 'GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
        <div className='react_blog-posts-groupB'>
        <Article imgUrl ={blog02} date = 'Apr 03, 2022' text = 'GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imgUrl ={blog03} date = 'Apr 03, 2022' text = 'GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imgUrl ={blog04} date = 'Apr 03, 2022' text = 'GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imgUrl ={blog05} date = 'Apr 03, 2022' text = 'GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
      </div>
    </div>
  )
}

export default Blog
