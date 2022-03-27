import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {IconButton} from "@mui/material"
import CommentIcon from '@mui/icons-material/Comment';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom";
import EditModal from "./editModal";
import { useDispatch } from "react-redux";
import { deletePost, votePost, addComment } from "../actions/posts.actions";
const Post = ({ post }) => {
	//{title: "", id:""}
	//const { posts, setPosts } = useContext(PostsContext)

	/* 	const dispatch = useDispatch()

	const deletePost = () => {
		//const filteredPosts = posts.filter((p) => p.id !== post.id);
		dispatch(deletePost(post.id))
		//setPosts(filteredPosts);
	}; */
	const dispatch = useDispatch();
	const handleDelete = () => {
		dispatch(deletePost(post.id));
		console.log(post.id);
	};

	const handleComment = () => {
		
	}
	const handleUpVote = () => {
		dispatch(votePost(post.id, {userVote: 1, userId: 1}))
	}
	const handleDownVote = () => {
		dispatch(votePost(post.id, {userVote: -1, userId: 1}))
	}
	return (
		<>
			<Card sx={{ maxWidth: 650, bgcolor: "#eee" }}>
				<CardHeader title={post.title} />

				<CardContent>
					<Typography variant="body2" color="text.secondary">
						{post.body}
					</Typography>
				</CardContent>
				<Divider />
				<CardActions disableSpacing>
					<Link to={"/post/" + post.id} style={{ textDecoration: "none" }}>
						<Button color="primary" variant="outlined" size="small" sx={{ marginRight: "10px" }}>
							more..
						</Button>
					</Link>
					{/* <Button color="warning" variant="contained" onClick={deletePost}>
					Delete
				</Button> */}
					<EditModal title={post.title} body={post.body} userId={post.userId} id={post.id} />
					<Button sx={{ marginLeft: "10px" }} color="warning" variant="contained" size="small" onClick={handleDelete}>
						Delete
					</Button>
					<IconButton onClick={handleComment} color="primary" aria-label="upload picture" component="span">
						<CommentIcon />
					</IconButton>
					<IconButton onClick={handleUpVote} color="primary" aria-label="upload picture" component="span">
						<KeyboardArrowUpIcon /> 
					</IconButton>
					{post.upVotesTotal}
					<IconButton onClick={handleDownVote} color="primary" aria-label="upload picture" component="span">
						<KeyboardArrowDownIcon />
					</IconButton>
					{post.downVotesTotal}
				</CardActions>
			</Card>
		</>
	);
};

export default Post;
