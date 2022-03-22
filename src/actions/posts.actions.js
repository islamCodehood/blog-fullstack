import * as api from "../api";

// Get posts
export const getPosts = () => async (dispatch) => {
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
		const { data } = await api.addPost(newPost);
		dispatch({ type: "ADD_POST", payload: data });
	} catch (err) {
		console.log(err);
	}
};

// Update post
export const updatePost = (id, updatedPost) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, updatedPost);
        dispatch({ type: "UPDATE_POST", payload: data });
    }catch(err) {
        console.log(err)
    }
}