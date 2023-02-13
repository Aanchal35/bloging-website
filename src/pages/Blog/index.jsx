import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import EmptyList from '../../components/Common/EmptyList/EmptyList';
import Header from '../../components/Home/Header';
import { blogList } from '../../config/data';
import './style.css';

const Blog = () => {
  const {id} =useParams();
  const [blog,setBlog]= useState(null)
   
  useEffect(() => {
    let blog=blogList.find(blog=>blog.id===parseInt(id));
    if(blog){
      setBlog(blog);
    }
  },[])
  return (
    <div>
      <Link className='blog-goback' to="/"><span>&#8592;</span> go back</Link>
      {
        blog? <div className='blog-wrap'>
          <Header>
            <p className='blog-date'>Published{blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.subCategory.map((category,index) =>(<div><chip Key={index} label={category}/></div>))}
            </div>

          </Header>
          <img src={blog.cover} alt="cover"/>
          <p className='blog-desc'>{blog.description}</p>
          </div>
          :(
            <EmptyList/>
          )
}
    </div>
  )
}

export default Blog;
