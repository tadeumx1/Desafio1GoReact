import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Header from "../Header/Header.js";
import Post from "../Post/Post.js";

import "./styles.scss";

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: "Diego Schell Fernandes",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz56paVfDZdTua3ebRM8Cnu38bM4q5aMsZnAW0Ucf6NsG-fSf7uw",
        time: "há 3 min",
        body:
          "Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis"
      },
      {
        id: 2,
        name: "Rubia Savolksi",
        avatar:
          "http://highlinewest.com/wp/wp-content/uploads/2016/01/linkedin-profile-photos-vancouver-bc-amanda.jpg",
        time: "há 30 min",
        body:
          "Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum."
      },
      {
        id: 3,
        name: "Mr Mustache",
        avatar: "http://www.sfu.ca/olc/sites/default/files/linkedin6.jpg",
        time: "há 30 min",
        body:
          "Pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum."
      }
    ]
  };

  render() {
    return (
      <div>
        <Header />

        {this.state.posts &&
          this.state.posts.map(post => <Post key={post.id} data={post} />)}
      </div>
    );
  }
}
