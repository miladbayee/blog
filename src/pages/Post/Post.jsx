import './post.css'
import { useContext} from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import AppContext from "../../context/appContext";
import CardFooter from "../../components/CardFooter";

const Post = () => {
  const { id } = useParams();
  const { posts } = useContext(AppContext);
  const post = posts.filter((post) => post.id === id);
  const { title, body, description, img } = post[0];

  return posts ? (
    <div className='post'>
      <div className='post__header'>
        <h2>{title}</h2>
        <p>{description}</p>
        <CardFooter {...post[0]} />
      </div>
      <div className='post__img'>
        <img src={img.url} alt={title} />
      </div>
      <div className='post__body'>
        <p>{body}</p>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Post;
