import React,{useState,useEffect}  from 'react'
import axios from 'axios'
import PostCard from '../components/PostCard/PostCard'
import PostForm from '../components/PostForm/PostForm'
const HomePage = () => {
    const [posts,setPosts]=useState([])
  const [isLoading,setIsLoading]= useState(false)
  const [isError,setIsError]=useState(false)
  const writePost = async ()=>{
    axios.post('http://localhost:2345/posts',{
      user_id:'ravi from react',
      body_text:'first post'
    }).then((resp)=>{
      console.log(resp)
    })
  }

  const getPosts =  ()=>{
  return axios.get("http://localhost:2345/posts")
  }
  useEffect(()=>{
    setIsLoading(true)
    getPosts().then(({data})=>{
      
      setPosts(data.posts)
      setIsLoading(false)
    })
  },[])
  
    return (
        <div>
            <PostForm/>
            {isLoading?'Loading posts': posts.map((post)=>{
                return <PostCard post={post} />
            })}
        </div>
    )
}

export default HomePage
