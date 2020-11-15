//declare libraries
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./commentdetail";
import faker from "faker";
//component
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="arun"
        timeago="Today at 4PM"
        content="nice blog post! awesome..:)"
        fakeprofile={faker.image.avatar()}
      />
      <CommentDetail
        author="megha"
        timeago="Today at 5PM"
        content="super blog!"
        fakeprofile={faker.image.avatar()}
      />
      <CommentDetail
        author="sabarish"
        timeago="Today at 6PM"
        content="awesome one!"
        fakeprofile={faker.image.avatar()}
      />
    </div>
  );
};

//render
ReactDOM.render(<App></App>, document.querySelector("#root"));
