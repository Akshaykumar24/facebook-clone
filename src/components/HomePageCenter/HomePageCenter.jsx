import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../utils/url";
import { getData } from "../../utils/localStorage";
import PostCard from "../PostCard/PostCard";
import PostForm from "../PostForm/PostForm";
import {
  Wrapper,
  FormContainer,
  PostsContainer,
} from "./HomePageCenter.styles";
const HomePageCenter = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("");
  const getPosts = () => {
    return axios.get("http://localhost:2424/api/posts");
  };

  useEffect(() => {
    let res = getData('userId')
    //  console.log('res:', res)
    axios.get(`${url}/api/user/${res}`).then(({ data }) => {

      setUser(data.user)
    })

  }, []);


  useEffect(() => {
    setIsLoading(true);
    setPosts(getData("allUserPosts").posts)
    // getPosts()
    //   .then(({ data }) => {
    //     // console.log('data:', data.posts)

    //     setPosts(data.posts);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     setIsError(true);
    //     console.log('err:', err)

    //   });
  }, []);

  // console.log('posts:', posts)

  return (
    <Wrapper>
      <FormContainer>
        <PostForm user={user} />
      </FormContainer>
      <PostsContainer>
        {isLoading
          ? "Loading posts"
          : isError
            ? "Some errors"
            : posts.map((post) => {

              return <PostCard key={post._id} user={user} post={post} />;
            })}
      </PostsContainer>
    </Wrapper>
  );
};

export default HomePageCenter;
