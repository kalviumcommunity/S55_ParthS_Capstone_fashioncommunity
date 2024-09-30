import React, { useState, useEffect } from "react";
import "./explore.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos/Hues_transparent.png";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (page > 1) {
      fetchPosts();
    }
  }, [page]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://s55-parths-capstone-fashioncommunity.onrender.com/data?page=${page}`);
      const data = await response.json();
      setPosts((prevPosts) => [...prevPosts, ...data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  const handleLike = async (postId) => {
    try {
      const postIndex = posts.findIndex((post) => post.id === postId);
      const currentLikes = posts[postIndex].likes;

      const response = await fetch(`https://s55-parths-capstone-fashioncommunity.onrender.com/data/${postId}/like`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ likes: currentLikes + 1 }), 
      });

      if (!response.ok) {
        throw new Error("Failed to update like count due to server error");
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

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div>
      <nav>
        <Link to="/"><img src={Logo} className="logo" alt="Hues logo" /></Link>
        <input type="text" className="search" placeholder="Search For the Outfits" />
        <div>
          <Link to="/explore"><button className="explore-btn"> Explore</button></Link>
        </div>
        <div>
          <Link to="/designers"><button className="desi-btn">Designers</button></Link>
        </div>
        <div>
          <Link to="/create"><button className="create-btn"> Create</button></Link>
        </div>
      </nav>

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
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;
