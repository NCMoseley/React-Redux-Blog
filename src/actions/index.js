import axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=OperationSnakeEater";

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts/${API_KEY}`);
  console.log(request);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    // this callback handles the race condition that is created when the post is submitted and the user is navigated back to the ondex page.
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}
