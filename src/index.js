//declare libraries
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./commentdetail";
//component
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
    </div>
  );
};

//render
ReactDOM.render(<App></App>, document.querySelector("#root"));
