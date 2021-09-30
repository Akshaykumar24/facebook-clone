import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "../PostCard/PostCard";
import PostForm from "../PostForm/PostForm";
import {
  Wrapper,
  FormContainer,
  PostsContainer,
} from "./HomePageCenter.styles";

const HomePageCenter = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getPosts = () => {
    return axios.get("http://localhost:2424/api/posts");
  };

  useEffect(() => {
    setIsLoading(true);
    getPosts()
      .then(({ data }) => {
        setPosts(data.posts);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        console.log(err);
      });
  }, []);

  return (
    <Wrapper>
      <FormContainer>
        <PostForm />
      </FormContainer>
      <PostsContainer>
        {isLoading
          ? "Loading posts"
          : isError
          ? "Some errors"
          : posts.map((post) => {
              return <PostCard post={post} />;
            })}
      </PostsContainer>
    </Wrapper>
  );
};

export default HomePageCenter;
