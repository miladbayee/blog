import "./auther-posts.css";
import { useHistory } from "react-router-dom";
import PlaceholderLoader from "../PlaceholderLoder";

const AutherCard = ({ ...props }) => {
  const history = useHistory();
  const { id, title, description, date, readTime, img } = props;

  const handleClikPost = () => {
    history.push(`/post/${id}`);
  };
  return (
    <li className="auther__posts">
      <div>
        { img.thumbnail? (<img src={img.thumbnail} alt={title} />): <PlaceholderLoader viewBox="0 0 460 460" />}
      </div>
      <div className="auther__posts__content">
        <h2 onClick={handleClikPost}>{title}</h2>
        <p>{description}</p>
        <div className="auther__posts__content__date">
          <span>{date}</span>
          <span>.</span>
          <span>{`${readTime} read time`}</span>
        </div>
      </div>
    </li>
  );
};

export default AutherCard;
