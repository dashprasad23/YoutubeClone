import React from "react";
import { CommentsDataDTOMock } from "../mock/commentMock";

const CommentData = CommentsDataDTOMock;

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-100 p-2 rounded border border-l-red-300">
      <i className="las la-user"></i>
      <div className="px-3">
        <p>{name}</p>
        <p>{text}</p>
        {replies.map(reply => <Comment key={reply.id} data={reply}/>)}
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      {CommentData.map(comment => <Comment key={comment.id} data={comment} />)}
    </div>
  );
};

export default CommentsContainer;
