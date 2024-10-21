import { useState } from "react";

const Comment = ({ data }) => {
  console.log(data);
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      {data.map((comment) => (
        <div className="Comment">
          <div className="popularity">
            <button onClick={handleIncrement}>+</button>
            <span>{comment.score}</span>
            <button onClick={handleDecrement}>-</button>
          </div>
          <div className="comment__header">
            <img
              src={comment.user.image.png}
              alt="user avatar"
              className="comment__avatar"
            />
            <p className="comment__username">{comment.user.username}</p>
            <p className="comment__createdAt">{comment.createdAt}</p>
          </div>
          <div className="comment__body">
            <p className="comment__content">{comment.content}</p>
          </div>
          <div className="replay__button">
            <img src="./images/icon-reply.svg" alt="reply icon" />
            <button>Reply</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Comment;
