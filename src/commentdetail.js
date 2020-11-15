import React from "react";
import faker from "faker";

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()}></img>
      </a>
      <div className="content">
        <a href="/" className="author">
          arun
        </a>
        <div className="metadata">
          <span className="date">Today at 6.0 PM</span>
        </div>
        <div className="text">nice blog post! awesome..:)</div>
      </div>
    </div>
  );
};
export default CommentDetail;