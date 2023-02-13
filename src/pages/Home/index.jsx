import React from 'react'
import { useState } from 'react';
import EmptyList from '../../components/Common/EmptyList/EmptyList';
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import { blogList } from '../../config/data';

const Home = () => {
   const [blogs, setBlogs] = useState(blogList);
   const [searchKey, setSearchKey] = useState('');

   const handleSearchSubmit= (event) => {
    event.preventDefault();
    handleSearchResults();
   }
   const handleSearchResults=()=>{
    const allBlogs=blogList;
    const filteredBlog=allBlogs.filter((blog) =>
    blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));
     setBlogs(filteredBlog);
   }
   const handleClearSearch =() =>{
    setBlogs(blogList);
    setSearchKey('');
   }
   return (
    <div>
      <Header/>
      <SearchBar value={searchKey}
      clearSearch={handleClearSearch}
       formSubmit={handleSearchSubmit}
        handleSearchKey={(e)=>setSearchKey(e.target.value)} />

      {!blogs.length ? <EmptyList/> :<BlogList blogs={blogs}/>}
    </div>
  )
}

export default Home;
