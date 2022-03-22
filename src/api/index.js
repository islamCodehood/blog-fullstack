import axios from "axios"

const API = axios.create({baseURL: "https://api.tawwr.com"})

//Get posts
export const getPosts = () => API.get("/posts")

//add post
export const addPost = (newPost) => API.post("/post", newPost)

//update a post
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);