import React, { useState, useEffect } from "react";
import "./explore.css";

const Post = ({ username, imageUrl }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="post">
      <img src={imageUrl} alt="Post" className="post-image" />
      <div className="post-details">
        <button onClick={handleLike} className="like-button">
          <i className="far fa-heart"></i> Like
        </button>
        <span className="likes">
          {likes} {likes === 1 ? "like" : "likes"}
        </span>
        <p className="username">Posted by {username}</p>
      </div>
    </div>
  );
};

function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://s55-parths-capstone-fashioncommunity.onrender.com/data");
      const data = await response.json();
      setPosts((prevPosts) => [...prevPosts, ...data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight - 5 && posts.length) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [posts]);

  return (
    <div className="app">
      {posts.map((post, index) => (
        <Post key={index} username={post.designer} imageUrl={post.imageurl} />
      ))}
    </div>
  );
}

export default App;
