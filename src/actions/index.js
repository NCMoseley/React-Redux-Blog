import axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";

export function fetchPosts() {
  const request = axios.get();

  return {
    type: FETCH_POSTS
  };
}
