import React from "react";
import PropTypes from "prop-types";

import "./Post.scss";

import PostHeader from "../PostHeader/PostHeader";

const Post = props => (
  <div id="divPosts">
    <div id="Post">
      <PostHeader
        avatar={props.data.avatar}
        name={props.data.name}
        time={props.data.time}
      />
      <p>{props.data.body}</p>
    </div>
  </div>
);

Post.PropTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default Post;
