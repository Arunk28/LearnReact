//declare libraries
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./commentdetail";
//component
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="arun" />
      <CommentDetail author="megha" />
      <CommentDetail author="sabarish" />
    </div>
  );
};

//render
ReactDOM.render(<App></App>, document.querySelector("#root"));
