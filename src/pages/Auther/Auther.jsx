import "./auther.css";
import { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../../context/appContext";

import AutherInfo from "../../components/AutherInfo";
import AutherPosts from "../../components/AutherPosts";
import Loader from "../../components/Loader";

const Auther = () => {
  const { auther } = useParams();
  const { posts } = useContext(AppContext);
  const [autherPosts, setAutherPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const editAuther = useMemo(() => auther.split("-").join(" "), [auther]);

  useEffect(() => {
    if (isLoading) {
      const autherPostsList = posts.filter(
        (item) => item.auther[0] === editAuther
      );
      setAutherPosts(autherPostsList);
    }
    return () => {
      setIsLoading(false);
    };
  }, [posts, editAuther, isLoading]);

  const renderAutherPosts =
    autherPosts.length > 0 &&
    autherPosts.map((post) => <AutherPosts key={post.id} {...post} />);

  return (
    <div className="auther">
      <AutherInfo auther={editAuther} postsNumber={autherPosts.length} />
      {renderAutherPosts.length > 0 ? <ul>{renderAutherPosts}</ul> : <Loader />}
    </div>
  );
};

export default Auther;
