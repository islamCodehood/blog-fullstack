import Post from "./post";
import { Grid } from "@mui/material";
import { useEffect } from "react";
//import useSelectOR hook
import { useSelector } from "react-redux";
const Posts = () => {
	//import useSelect hook
	//return  the updated state via useSelect
	//const { posts } = useContext(PostsContext) // [ {title: "", id: ""}, {}, {}]
	const posts = useSelector((state) => state.posts);

	useEffect(() => {
		console.log(posts);
	}, []);
	useEffect(() => {
		console.log(posts);
	}, [posts]);

	return (
		<div>
			{(!posts || posts.length === 0) ? (
				<h1>Posts are loading</h1>
			) : (
				<Grid container spacing={4} style={{ marginTop: "30px" }}>
					{posts.map((post) => (
						<Grid key={post.id} item xs={12} >
							{" "}
							<Post post={post} />{" "}
						</Grid>
					))}
				</Grid>
			)}
		</div>
	);
};
export default Posts;
