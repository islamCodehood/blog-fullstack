import {  Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, } from "react";

//import hooks
import { useDispatch } from "react-redux"
//import action creators
import { addPost } from "../actions/posts.actions"

const FormModal = () => {
	const [open, setOpen] = useState(false);

    //const { posts, setPosts } = useContext(PostsContext);
    
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			title: "",
			author: "",
			text: "",
		},
		onSubmit: (values) => {
			const id = Date.now();
			const post = { ...values, id };

			//dispatch ADD_POST action
			dispatch(addPost(post))

			setOpen(false);
			//setPosts([...posts, post]);
            formik.resetForm()
		},
		validationSchema: Yup.object({
			title: Yup.string().required("Title is required").max(15, "limit passed"),
			author: Yup.string().required("author is required").max(10, "limit passed"),
			text: Yup.string().required("your message is required").max(240, "limit passed"),
		}),
	});
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
        formik.resetForm()
	};

	return (
		<div>
			<Button variant="outlined" onClick={handleClickOpen}>
				Open form dialog
			</Button>

			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Subscribe</DialogTitle>
				<DialogContent>
					<DialogContentText>
						To subscribe to this website, please enter your email address here. We will send updates occasionally.
					</DialogContentText>
					<TextField
						error={Boolean(formik.errors.author) && Boolean(formik.touched.author)}
						helperText={formik.errors.author}
						autoFocus
						name="author"
						value={formik.values.author}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						margin="dense"
						id="author"
						label="Author"
						type="text"
						fullWidth
						variant="standard"
					/>
					<TextField
						error={Boolean(formik.errors.title) && Boolean(formik.touched.title)}
						helperText={formik.errors.title}
						margin="dense"
						name="title"
						value={formik.values.title}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						id="title"
						label="Title"
						type="text"
						fullWidth
						variant="standard"
					/>
					<TextField
						error={Boolean(formik.errors.text) && Boolean(formik.touched.text)}
						helperText={formik.errors.text}
						id="post-text"
						name="text"
						value={formik.values.text}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						label="Post"
						multiline
						rows={4}
						fullWidth
						variant="standard"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button type="submit" onClick={formik.handleSubmit}>
						Publish
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default FormModal;
