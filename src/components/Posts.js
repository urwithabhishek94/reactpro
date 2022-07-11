import React from 'react';
import { Navigate, Link} from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

const Posts = ({ posts, loading }) => {
  let params = useParams();
    console.log("param", params.userId)
   const token = sessionStorage.getItem('token')
    console.log('token', token)
  if (loading) {
    return <h2>Loading...</h2>;
  }
  
  
  if(token !== "abhishek")
  {
    return <Navigate to="/" />
  }
  return (
    // <React.Fragment>
    
      posts.map(post => (
        
        <div className=" row my-3 ml-5 " key={post.id} >
          <div className="col-7 p-3 mb-2 bg-dark ">
            <ul className="list-group mb-2 " >
            <li className='list-group-item '><b>Post Id:</b> {post.userId}</li>
            <li className='list-group-item'><b>Id:</b> {post.id}</li>
            <li className="list-group-item"><b>Id:</b> {post.title}</li>
          <li className="list-group-item"><b>Comments:</b> {post.body}</li>
          <li className="list-group-item">
          <span>
             <Link to={`/comment/${post.userId}`} className='' style={{display: 'contents'}} >
              <button className='btn bg-primary text-white'>Details</button>
             </Link>
            </span>
          </li>
            </ul>
          </div>
        </div>
        
      ))
      
      
  
  );
};


export default Posts;
