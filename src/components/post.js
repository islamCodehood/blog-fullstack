import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
//import { PostsContext } from "../Context"
//import hooks
//import action creators
//import { deletePost } from "../actions"


const Post = ({ post }) => { //{title: "", id:""}
	//const { posts, setPosts } = useContext(PostsContext)

/* 	const dispatch = useDispatch()

	const deletePost = () => {
		//const filteredPosts = posts.filter((p) => p.id !== post.id);
		dispatch(deletePost(post.id))
		//setPosts(filteredPosts);
	}; */
	return (
		<Card sx={{ maxWidth: 345, bgcolor: "#eee" }}>
			<CardHeader
				title={post.title}
				subheader={post.author}
			/>

			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{post.text}
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
			</CardActions>
		</Card>
	);
};

export default Post;
