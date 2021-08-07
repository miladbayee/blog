import "./posts.css";
import { useCallback, useContext, useEffect } from "react";
import http from "../../services/httpService";
import Card from "../Card/Card";
import Loader from "../Loader";
import AppContext from "../../context/appContext";
import { getAllPostAction } from "../../context/postsAction";

const Posts = () => {
  const { posts, dispatch } = useContext(AppContext);
  const getPosts = useCallback(async () => {
    const res = await http.get("/571e3cdb-61d0-4c49-970f-7f618c468aa3");
    dispatch(getAllPostAction(res.data))
  }, [dispatch]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const renderPosts =
    posts.length>0 && posts.map((post) => <Card key={post.id} {...post} />);

  return posts.length>0 ? (
    <ul className="posts">{renderPosts}</ul>
  ) : (
    <Loader />
  );
};

export default Posts;
