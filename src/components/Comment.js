import React from 'react'
 import { Navigate } from 'react-router-dom'
 import { useParams } from "react-router-dom";
 import { useState, useEffect } from 'react';
 import axios from 'axios';
export default Comment = () =>{
    let {id} = useParams();
    console.log("param", id)
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchPosts = async () => {
          setLoading(true);
          const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
          setPosts(res.data);
          setLoading(false);
        };
        fetchPosts()
      }, []);
      console.log('com posts', posts)
    const token = sessionStorage.getItem('token')
    console.log('token', token)
    if(token !== "abhishek")
    {
        return <Navigate to="/" />
    }

    const commentShow = () => {
        
    } 
    return(
        <>
        <div className='container d-flex '> 
                  <h3 className='text-white mt-3 ml-5 '>Detail of the post with its comments.</h3>
        </div>

        <div>{
            posts.map(post => (
                    <div className=" container row my-3  ml-5" key={post.id} >
                  <div className="col-7 p-3 mb-2 bg-dark">
                    <ul className="list-group mb-2" >
                    <li className='list-group-item'><b>Post Id:</b> {post.postId}</li>
                    <li className="list-group-item"><b>ID:</b> {post.id}</li>
                   
                    <li className="list-group-item"> <b>Name: </b> {post.name}</li>
                    <li className="list-group-item"><b>Email: </b> {post.email}</li>
                    <li className="list-group-item"> <b>Comment:</b> {post.body}</li>
                    </ul>
                  </div>
                </div> 
              ))
       
        }</div>
        </>
    )
    }

    