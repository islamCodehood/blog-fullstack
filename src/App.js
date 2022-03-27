import "./App.css";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import PostDetails from "./pages/postDetails";
import { Routes, Route } from "react-router-dom";
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import { getPosts } from "./actions/posts.actions"
function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  } ,[])
  
	return (
		<div className="App">
			<NavBar />
			<div style={{padding: "12px"}}>
			<Routes>
				<Route path="/" element={<Home  />} />
				<Route path="/post/:id" element={<PostDetails  />} />
			</Routes>

			</div>
		</div>
	);
}

export default App;

