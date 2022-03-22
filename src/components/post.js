import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, } from "react";
import { Link } from "react-router-dom"
import EditModal from "./editModal"
 
const Post = ({ post }) => { //{title: "", id:""}
	//const { posts, setPosts } = useContext(PostsContext)

/* 	const dispatch = useDispatch()

	const deletePost = () => {
		//const filteredPosts = posts.filter((p) => p.id !== post.id);
		dispatch(deletePost(post.id))
		//setPosts(filteredPosts);
	}; */

	/* const editPost = () => {
		const 
	} */
	return (
		<>
		<Card sx={{ maxWidth: 345, bgcolor: "#eee" }}>
			<CardHeader
				title={post.title}
				subheader={post.authorId}
			/>

			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{post.body}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<Link to={"/post/" + post.id} style={{ textDecoration: 'none' }}>
					<Button color="primary" variant="outlined" style={{ marginRight: "10px" }}>
						read more..
					</Button>
				</Link >
				{/* <Button color="warning" variant="contained" onClick={deletePost}>
					Delete
				</Button> */}
				{/* <Button color="warning" variant="contained" onClick={editPost}>
					Edit
				</Button> */}
				<EditModal title={post.title} body={post.body} authorId={post.authorId} id={post.id} />
			</CardActions>
		</Card>
		
		</>
	);
};

export default Post;
