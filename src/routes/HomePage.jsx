import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "../components/PostCard/PostCard";
import PostForm from "../components/PostForm/PostForm";
const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  

  const getPosts = () => {
    return axios.get("http://localhost:2424/api/posts");
  };

  useEffect(() => {
    setIsLoading(true);
    getPosts().then(({ data }) => {
      setPosts(data.posts);
      setIsLoading(false);
    }).catch((err) => {
      setIsError(true);
      console.log(err);
    });;
  }, []);

  return (
    <div>
      <PostForm />
      {isLoading
        ? "Loading posts"
        : isError
        ? "Some errors"
        : posts.map((post) => {
            return <PostCard post={post} />;
          })}
    </div>
  );
};

export default HomePage;
