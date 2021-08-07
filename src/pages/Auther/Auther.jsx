import "./auther.css";
import { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../../context/appContext";

import AutherInfo from "../../components/AutherInfo";
import AutherPosts from "../../components/AutherPosts";
import Loader from "../../components/Loader";

const Auther = () => {
  const { auther } = useParams();
  const editAuther = useMemo(() => auther.split("-").join(" "), [auther]);
  const { posts } = useContext(AppContext);

  const autherPosts = posts.filter((item) => item.auther[0] === editAuther);
  const renderAutherPosts = autherPosts.map((post) => (
    <AutherPosts key={post.id} {...post} />
  ));

  return (
    <div className="auther">
      <AutherInfo auther={editAuther} postsNumber={autherPosts.length} />
      {renderAutherPosts.length > 0 ? <ul>{renderAutherPosts}</ul> : <Loader />}
    </div>
  );
};

export default Auther;
