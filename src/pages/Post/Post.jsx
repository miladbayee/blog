import "./post.css";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import AppContext from "../../context/appContext";
import CardFooter from "../../components/CardFooter";
import PlaceholderLoder from "../../components/PlaceholderLoder";

const Post = () => {
  const { id } = useParams();
  const { posts } = useContext(AppContext);
  const [post, setPost] = useState("");

  useEffect(() => {
    const filterPost = posts.filter((post) => post.id === id);
    setPost(filterPost);
    return () => {};
  }, [posts, id]);

  const userPost = post[0];

  return userPost ? (
    <div className="post">
      <div className="post__header">
        <h2>{userPost.title}</h2>
        <p>{userPost.description}</p>
        <CardFooter {...userPost} />
      </div>
      <div className="post__img">
        {userPost.img.url ? (
          <img src={userPost.img.url} alt={userPost.title} />
        ) : (
          <PlaceholderLoder />
        )}
      </div>
      <div className="post__body">
        <p>{userPost.body}</p>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Post;
