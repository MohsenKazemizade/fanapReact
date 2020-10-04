import React, { Component } from "react";
import { getPosts } from "./Data/taskOneData";
import Album from "./components/Album";
import PostDetails from "./components/PostDetails";

class TaskOne extends Component {
  state = {
    posts: getPosts(),
    isItemSelected: false,
  };

  handelPostSelect = (post) => {
    console.log(post);
  };
  render() {
    // console.log(this.state.posts);
    if (this.state.isItemSelected === false)
      return (
        <Album
          posts={this.state.posts}
          onSelect={() => this.handelPostSelect()}
        />
      );

    return <PostDetails />;
  }
}

export default TaskOne;
