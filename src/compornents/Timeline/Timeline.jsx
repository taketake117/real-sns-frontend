import React, { useEffect, useState } from 'react';
import "./Timeline.css";
import Share from '../Share/Share';
import Post from '../Post/Post';
//import { Posts } from '../../dummyData';
import axios from "axios"


export default function Timeline({username}) {
  const [posts, setPosts] =  useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username 
      ? await axios.get(`/posts/profile/${username}`) 
      : await axios.get("/posts/timeline/64a11b02ce12e6fb85300967");
      //console.log(response);
      setPosts(response.data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <div className="timeline">
        <div className="timelineWrapper">
          <Share />
          {posts.map((post) =>(
            <Post post={post} key={post._id}/>
          ))}
        </div>
      </div>
    </>
  )
}
