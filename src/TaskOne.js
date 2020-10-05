import React, { Component } from "react";
import { getPosts } from "./Data/taskOneData";
import Album from "./components/Album";
import PostDetails from "./components/PostDetails";

class TaskOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: getPosts(),
      isItemSelected: false,
      post: [],
    };
  }

  handlePostSelect = (selectedPost) => {
    const posts = [...this.state.posts];
    const index = posts.indexOf(selectedPost);
    const post = posts[index];
    this.setState({ post, isItemSelected: true });
  };
  handleBackToList = () => {
    this.setState({ isItemSelected: false });
  };
  render() {
    if (this.state.isItemSelected === false)
      return (
        <Album
          posts={this.state.posts}
          onClick={(e) => this.handlePostSelect(e)}
        />
      );

    return (
      <PostDetails data={this.state.post} onClick={this.handleBackToList} />
    );
  }
}

export default TaskOne;
