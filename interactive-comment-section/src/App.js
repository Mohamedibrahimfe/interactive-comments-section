import "./App.css";
import Comment from "./Comment";
import { useEffect, useState } from "react";
function App() {
  const [allComments, setAllComments] = useState([]);
  const getData = async () => {
    const response = await fetch("http://localhost:8000/comments");
    const data = await response.json();
    setAllComments(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const [comment, setComment] = useState({
    user: {
      image: {
        png: "./images/avatars/image-juliusomo.png",
        webp: "./images/avatars/image-juliusomo.webp",
      },
      username: "juliusomo",
    },
    content: "",
    createdAt: "2 weeks ago",
    score: 0,
    replies: [],
  });
  const [commentId, setCommentId] = useState(10);
  const getCurrentUser = async () => {
    const response = await fetch("http://localhost:8000/currentUser");
    const data = await response.json();
    setCurrentUser(data);
    console.log(data);
  };
  useEffect(() => {
    // getCurrentUser();
  });
  const [currentUser, setCurrentUser] = useState({
    image: {
      png: "./images/avatars/image-amyrobson.png",
      webp: "./images/avatars/image-amyrobson.webp",
    },
    username: "mohamed",
  });
  const getNowDate = () => {
    const date = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    return `${day} ${month} ${year} at ${hour}:${min}:${sec}`;
  };
  const addComment = async () => {
    const response = await fetch("http://localhost:8000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          image: {
            png: currentUser.image.png,
            webp: currentUser.image.webp,
          },
          username: currentUser.username,
        },
        createdAt: getNowDate(),
        content: comment.content,
        score: 0,
        replies: [],
        id: commentId + 1,
      }),
    });
    console.log(comment.content);
    setCommentId(commentId + 1);
    getData();
    // alert("comment added");
  };

  return (
    <div className="App">
      <div className="container">
        <Comment data={allComments} />
      </div>
      <label>Add a comment</label>
      <input
        type="text"
        value={comment.content}
        onChange={(e) => setComment({ ...comment, content: e.target.value })}
      />
      <button onClick={addComment}>Add Comment</button>
    </div>
  );
}

export default App;
