import React, { useState, useEffect } from "react";
import "./explore.css";

const Post = ({ id, name, imageUrl, type, designer, Collection, likes, handleLike }) => {
  return (
    <div className="post">
      <img src={imageUrl} alt="Post" className="post-image" />
      <div className="post-details">
        <button onClick={() => handleLike(id)} className="like-button">
          <i className="far fa-heart"></i> Like
        </button>
        <span className="likes">
          {likes} {likes === 1 ? "like" : "likes"}
        </span>
        <p className="name">Name: {name}</p>
        <p className="type">Type: {type}</p>
        <p className="designer">Designer: {designer}</p>
        <p className="collection">Collection: {Collection}</p>
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

  const handleLike = async (postId, currentLikes) => {
    try {
      const response = await fetch(`https://s55-parths-capstone-fashioncommunity.onrender.com/data/${postId}/like`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ likes: currentLikes + 1 }), // Increment likes by 1
      });
      if (!response.ok) {
        throw new Error("Failed to update like count");
      }
      const updatedPost = await response.json();
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId ? { ...post, likes: updatedPost.likes } : post
        )
      );
    } catch (error) {
      console.error("Error updating like count:", error);
    }
  };

  return (
    <div className="app">
      {posts.map((post, index) => (
        <Post
          key={index}
          id={post.id}
          name={post.name}
          imageUrl={post.imageurl}
          type={post.type}
          designer={post.designer}
          Collection={post.Collection}
          likes={post.likes}
          handleLike={handleLike}
        />
      ))}
    </div>
  );
}

export default App;
