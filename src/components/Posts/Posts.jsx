import "./posts.css";
import { useContext } from "react";

import Card from "../Card/Card";
import Loader from "../Loader";
import AppContext from "../../context/appContext";


const Posts = () => {
  const { posts} = useContext(AppContext);

  const renderPosts =
    posts.length>0 && posts.map((post) => <Card key={post.id} {...post} />);

  return posts.length>0 ? (
    <ul className="posts">{renderPosts}</ul>
  ) : (
    <Loader />
  );
};

export default Posts;
