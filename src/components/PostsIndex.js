import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostsIndex extends Component {
  // It dosen't matter if the data fetching is done before or after the component is called, React is asyncronously getting the data asap.
  // This is a lifecycle method built into React and will be called automatically if it is defined as below
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return <div>I SPIT HOT FIRE</div>;
  }
}

// fetchPosts here is equal to { fetchPosts: fetchPosts }, and used in this manner, without map dispatch to props gives this component access to the redux store, with a slightly different syntax.
export default connect(
  null,
  { fetchPosts }
)(PostsIndex);
