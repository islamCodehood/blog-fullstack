import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material"
const PostDetails = () => {
	const { id } = useParams();
	const [post, setPost] = useState({});

	useEffect(() => {
		const posts = JSON.parse(localStorage.getItem("posts"));
		const post = posts.filter((p) => +p.id === +id)[0];
		setPost(post);
		console.log({ post, id });
	}, []);

	if (!post) return <h1>No posts found with id {id} </h1>;
	return (
		<>
			<Typography variant="h4">
				{post.title}
			</Typography>
		</>
	);
};
export default PostDetails;
