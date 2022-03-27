import {  Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const AddComment = () => {
    import {  Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, } from "react";
    return ( 
        <Dialog open={open} onClose={handleClose}>
				<DialogTitle>Subscribe</DialogTitle>
				<DialogContent>
					<DialogContentText>
						To subscribe to this website, please enter your email address here. We will send updates occasionally.
					</DialogContentText>
					<TextField
						error={Boolean(formik.errors.userId) && Boolean(formik.touched.userId)}
						helperText={formik.errors.userId}
						autoFocus
						name="userId"
						value={formik.values.userId}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						margin="dense"
						id="userId"
						label="Author"
						type="text"
						fullWidth
						variant="standard"
                        disabled
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
						error={Boolean(formik.errors.body) && Boolean(formik.touched.body)}
						helperText={formik.errors.body}
						id="post-text"
						name="body"
						value={formik.values.body}
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
     );
}
 
export default AddComment;