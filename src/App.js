import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';
import Login from './components/Login'
import Comment from './components/Comment'
import { BrowserRouter as Router, Route, Routes,useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom'


const App = () => {
  var [token, setToken] = useState([])
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [query, setQuery] = useState("")
  
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts/');
      setPosts(res.data);
      setLoading(false);
    };

   const  search = async () => {
      setLoading(true);
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${query}`);
      setPosts(res.data);
      setLoading(false);
    }
    
    if(query == "")
    {
      fetchPosts();
    }
    else
    {
      search()
    }
    const newToken = JSON.parse(localStorage.getItem('items'));
    if(newToken)
    {
      setToken(token)
    }
  }, [query]);

  const handleClick = () => {
    console.log('i am from app')
    return <Navigate to="/comment/" />
   };
  
  
  console.log(posts)
  console.log(query)
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  

  return (
    <React.Fragment>
    <Router>
    <div className='container my-5 bg-secondary'>
      <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/comment/:id" element={
            <Comment comment={currentPosts} loading={loading} />
            }/>
            <Route exact path="/posts" 
              element={
                <>
                <br />
                <nav class="navbar navbar-light bg-light ">
                    <form class="form-inline">
                      <input class="form-control" type="search"
                       placeholder="Search by post id for example 1, 2, 3" aria-label="Search" onChange={event => setQuery(event.target.value)}/>
                      <button disabled class="btn bg-primary text-white" type="submit">Search</button>
                    </form>
                </nav> 
                  <div className='d-flex '> 
                  <h3 className='text-white mt-3 ml-5 '>Lists of post</h3>
                  </div>
                  <Posts posts={currentPosts} loading={loading} search={10+10}  handleClick={handleClick}/>
                  <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
              </>}
            />
      </ Routes>
      <br />
      </div>
    </ Router>
    </ React.Fragment>
  );
};

export default App;
