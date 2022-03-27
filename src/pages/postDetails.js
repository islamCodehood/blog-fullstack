import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material"
import { useSelector } from "react-redux"
const PostDetails = () => {
	const { id } = useParams();
	const [post, setPost] = useState({});

	const posts = useSelector((state) => state.posts)

	useEffect(() => {
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
			<Typography variant="body">
				{post.body}
			</Typography>
		</>
	);
};
export default PostDetails;
