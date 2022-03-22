import * as api from "../api";

// Get posts
export const getPosts = () => async (dispatch) => {
	console.log("hello")
	try {
		const { data } = await api.getPosts();
		dispatch({ type: "FETCH_ALL", payload: data });
	} catch (err) {
		console.log(err);
	}
};

//add post
export const addPost = (newPost) => async (dispatch) => {
	try {
		await api.addPost(newPost);
		const { data } = await api.getPosts();
		dispatch({ type: "ADD_POST", payload: data });
	} catch (err) {
		console.log(err);
	}
};

// Update post
export const updatePost = (id, updatedPost) => async (dispatch) => {
	try {
		await api.updatePost(id, updatedPost);
		const { data } = await api.getPosts();
		dispatch({ type: "UPDATE_POST", payload: data });
	} catch (err) {
		console.log(err);
	}
};
