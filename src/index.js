//declare libraries
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./commentdetail";
import faker from "faker";
import ApprovalCard from "./approvalCard";
//component
const App = () => {
  return (
    <div className="ui container comments">
      {/* Component resusability */}
      <ApprovalCard>
        <h4>Warning!</h4>
        <div>Are you sure ?</div>
      </ApprovalCard>

      {/* parent and child components
      we can pass whole children component as a prop 
      in parent it will consume by props.children */}

      <ApprovalCard>
        <CommentDetail
          author="arun"
          timeago="Today at 4PM"
          content="nice blog post! awesome..:)"
          fakeprofile={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="megha"
          timeago="Today at 5PM"
          content="super blog!"
          fakeprofile={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="sabarish"
          timeago="Today at 6PM"
          content="awesome one!"
          fakeprofile={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

//render
ReactDOM.render(<App></App>, document.querySelector("#root"));
