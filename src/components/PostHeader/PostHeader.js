import React from "react";
import PropTypes from "prop-types";

import "./PostHeader.scss";

const PostHeader = props => (
  <div id="divPostHeader">
    <img className="imgPostHeader" src={props.avatar} alt="avatar" />

    <div id="InformationHeader">
      <strong>{props.name}</strong>
      <span>{props.time}</span>
    </div>
  </div>
);

PostHeader.defaultProps = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

export default PostHeader;
